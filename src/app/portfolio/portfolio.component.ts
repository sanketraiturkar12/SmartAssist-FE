import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../dataservice.service";
import * as Highcharts from "highcharts";
@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent implements OnInit {
    Highcharts: typeof Highcharts = Highcharts;
    updateFlag: true;
    newsDetails: any[];
    positvenegativeDetails: any = { top: [], bottom: [] };
    myCategory = [];
    myData = [];
    updateFlagstock: true;
    clientMostImpactedGraphs: boolean = false;
    clientMostImpactedByStock: string = "";
    marketsentimentclientDetails: any[];
    clientholdingdetails: any[];

    newsdatesortby: boolean = false;
    newssentimentsortby: any;

    newsoccuranceerror: boolean = false;
    mySortBy(field, desc) {
        return function (a, b) {
            return desc === "desc"
                ? Number(Number(a[field]) < Number(b[field])) - Number(Number(a[field]) > Number(b[field]))
                : Number(Number(a[field]) > Number(b[field])) - Number(Number(a[field]) < Number(b[field]));
        };
    }

    mySortByNews(field, desc) {
        return function (a, b) {
            return desc === "desc"
                ? new Date(b[field]).getTime() - new Date(a[field]).getTime()
                : new Date(a[field]).getTime() - new Date(b[field]).getTime();
        };
    }

    mySortNews(field) {
        let sorton = "";
        let sortby = "";
        if (field === "date") {
            sorton = "Article_TimeStamp";
            this.newsdatesortby = !this.newsdatesortby;
            sortby = this.newsdatesortby ? "desc" : "asc";
            this.newsDetails.sort(this.mySortByNews(sorton, sortby));
        } else if (field === "sentiment") {
            sorton = "Sentiment_score";
            this.newssentimentsortby = !this.newssentimentsortby;
            sortby = this.newssentimentsortby ? "desc" : "asc";
            this.newsDetails.sort(this.mySortBy(sorton, sortby));
        }
    }

    constructor(private myservice: DataserviceService) { }
    getClientStock(ticker: string) {
        // Scroll to the graph section
        document.querySelector("#impactgraph")?.scrollIntoView();
        this.clientMostImpactedByStock = "";
        this.clientMostImpactedGraphs = false;

        // Find the security details for the selected ticker
        const _mySecurity = [
            ...this.positvenegativeDetails.top,
            ...this.positvenegativeDetails.bottom,
        ].find((p) => p.Ticker === ticker);

        const mySecurity = (_mySecurity && _mySecurity.SecurityID) || "";

        if (_mySecurity) {
            this.myservice
                .getMarketSentimentByClient(1, mySecurity)
                .subscribe((data) => {
                    // Populate market sentiment client details
                    this.marketsentimentclientDetails = data["data"]
                        .filter((p) => p.clientName && typeof p.clientName === "string" && isNaN(Number(p.clientName.trim()))) // Ensure valid names (not numbers)
                        .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()) // Sort by latest datetime
                        .slice(0, 5); // Get the latest 5 records

                    console.log("Market Sentiment Client Details (Latest 5 Records with Valid Names):", this.marketsentimentclientDetails);

                    if (!this.marketsentimentclientDetails || this.marketsentimentclientDetails.length === 0) {
                        console.error("No data available for the selected ticker:", ticker);
                        this.clientMostImpactedGraphs = false;
                        return;
                    }

                    // Map unique client names and corresponding Y-axis data
                    const mappedData = this.marketsentimentclientDetails
                        .filter((p) => p.clientName && typeof p.clientName === "string" && p.clientName.trim() !== "") // Ensure valid strings
                        .map((p) => ({
                            clientName: p.clientName.trim(),
                            y: Number.parseFloat(p.tot_mkt_val.replace(/,/g, "")) || 0,
                            ticker: p.ticker,
                            stockPercent: p.particularStkPct || "0",
                            symbol: p.currency_symbol || "$",
                        }))
                        .filter((p) => p.y > 0); // Exclude entries with no Y-axis data

                    // Extract unique X-axis categories and corresponding Y-axis data
                    // const marketsentimentcategory = Array.from(new Set(mappedData.map((p) => p.clientName)));
                    // Extract unique client names for the X-axis categories
                    const marketsentimentcategory = Array.from(
                        new Set(
                            this.marketsentimentclientDetails
                                .filter((p) =>
                                    p.clientName &&
                                    typeof p.clientName === "string" &&
                                    p.clientName.trim() !== "" && // Exclude empty strings
                                    p.clientName.trim().toLowerCase() !== "length" && // Exclude invalid entries like "length"
                                    isNaN(Number(p.clientName.trim())) // Exclude numeric values
                                )
                                .map((p) => p.clientName.trim()) // Trim whitespace from client names
                        )
                    );

                    // Ensure the "length" property is not included in the final array
                    const filteredCategories = marketsentimentcategory.filter((name) => name.toLowerCase() !== "length");

                    console.log("X-Axis Categories (Filtered Client Names):", filteredCategories);
                    const marketsentimentdata2 = mappedData.map((p) => ({
                        y: p.y,
                        ticker: p.ticker,
                        stockPercent: p.stockPercent,
                        symbol: p.symbol,
                    }));

                    console.log("X-Axis Categories (Filtered Client Names):", marketsentimentcategory);
                    console.log("Y-Axis Data (Filtered Market Sentiment Data 2):", marketsentimentdata2);

                    // Ensure data is valid before updating chart options
                    if (!marketsentimentdata2.length || !marketsentimentcategory.length) {
                        console.error("Error: Data for chart series or categories is invalid or undefined.");
                        return;
                    }

                    // Update chart options
                    this.chartOptionsstockgraph.series = [
                        {
                            type: "column",
                            data: marketsentimentdata2,
                            color: "darkgray",
                        },
                    ];

                    this.chartOptionsstockgraph.xAxis = {
                        categories: marketsentimentcategory, // Use filtered client names as X-axis categories
                        labels: {
                            style: {
                                fontSize: "12px",
                                color: "#000",
                            },
                        },
                    };

                    // Trigger chart update
                    this.updateFlagstock = true;
                    this.clientMostImpactedGraphs = true;
                    this.clientMostImpactedByStock = ticker;

                    console.log("Updated Chart Options for getClientStock:", this.chartOptionsstockgraph);
                });
        } else {
            console.error("No security details found for the selected ticker:", ticker);
        }


        // Fetch news data for the selected security
        this.myservice.NewsData(1, mySecurity.toString(), "date").subscribe(
            (data) => {
                this.newsoccuranceerror = false;
                this.newsDetails = data["data"];
                this.newsDetails.sort(this.mySortBy("Sentiment_score", "asc"));
            },
            (error) => {
                this.newsoccuranceerror = true;
                console.error("Error fetching news data:", error);
            }
        );
    }
    ngOnInit(): void {
        this.myservice.getPositveNegative(1).subscribe((data) => {
            console.log("Backend Response:", data);
            this.positvenegativeDetails = data["data"];

            // Ensure top and bottom arrays are valid
            const topData = Array.isArray(this.positvenegativeDetails["top"])
                ? this.positvenegativeDetails["top"]
                : [];
            const bottomData = Array.isArray(this.positvenegativeDetails["bottom"])
                ? this.positvenegativeDetails["bottom"]
                : [];

            // Map data for the chart
            this.myData = [
                ...topData.map((p) => ({
                    y: p.sent_score, // Sentiment score
                    color: p.sent_score > 0 ? "#039D00" : "#B50000", // Green for positive, red for negative
                    change: p.priceChangePct,
                    esg: p.esg_score,
                    ticker: p.Ticker,
                })),
                ...bottomData.map((p) => ({
                    y: p.sent_score, // Sentiment score
                    color: p.sent_score > 0 ? "#039D00" : "#B50000", // Green for positive, red for negative
                    change: p.priceChangePct,
                    esg: p.esg_score,
                    ticker: p.Ticker,
                })),
            ];

            // Map categories for the x-axis
            this.myCategory = [
                ...topData.map((p) => p.Ticker),
                ...bottomData.map((p) => p.Ticker),
            ];

            // Get unique tickers and their corresponding data
            const uniqueTickers = new Set();
            const uniqueData = [];
            const uniqueCategories = [];

            this.myData.forEach((dataPoint, index) => {
                if (!uniqueTickers.has(dataPoint.ticker)) {
                    uniqueTickers.add(dataPoint.ticker);
                    uniqueData.push(dataPoint);
                    uniqueCategories.push(this.myCategory[index]);
                }
            });

            this.myData = uniqueData;
            this.myCategory = uniqueCategories;

            // Log the unique data and categories
            console.log("Unique myData:", this.myData);
            console.log("Unique myCategory:", this.myCategory);

            // Update chart options
            this.chartOptions.series = [
                {
                    name: "Sentiment",
                    type: "bar",
                    pointWidth: 10,
                    data: this.myData,
                },
            ];
            this.chartOptions.xAxis["categories"] = this.myCategory;

            // Trigger chart update
            this.updateFlag = true;
            console.log("Chart Options Updated (unique tickers):", this.chartOptions);
        });
    }
    chartOptionsstockgraph: Highcharts.Options = {
        chart: {
            type: "column",
            borderRadius: 9
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "",
        },
        legend: {
            enabled: false,
        },
        // tooltip: {
        //     useHTML: true,
        //     borderColor: "black",
        //     backgroundColor: "black",
        //     borderWidth: 1,
        //     formatter(): string {
        //         return "" + this.x + " " + ": " + "$" + this.y.toLocaleString() + "" + this.point['ticker'];
        //     },

        //     style: {
        //         color: "white",
        //     },
        // },
        // tooltip: {
        //     backgroundColor: "black",
        //     shared: true,
        //     useHTML: true,
        //     headerFormat: "<b>{point.key}</b><table>",
        //     pointFormat:
        //         // "<tr><td>{series.name}: </td>" +
        //         // '<td style="text-align: right"><b>{point.y} </b></td></tr>' +
        //         '<tr><td><b>{point.ticker} </b></td></tr>',
        //     footerFormat: "</table>",
        //     valueDecimals: 2,
        //     borderColor: "transparent",

        //     style: {
        //         color: "white",
        //     },
        // },


        tooltip: {
            backgroundColor: "black",
            shared: true,
            useHTML: true,
            headerFormat: "<b>{point.key}</b><br>",
            pointFormat: `
                <b>Sentiment:</b> {point.y}<br>
                <b>% Change:</b> {point.change}%<br>
                <b>ESG:</b> {point.esg}
            `,
            style: {
                color: "white",
            },
        },
        xAxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yAxis: {
            gridLineWidth: 0,

            labels: {
                formatter(): string {
                    return "$" + this.value.toLocaleString();
                },
            },

            title: { text: "" },
            lineWidth: 1,
            stackLabels: {
                style: {
                    color: "black",
                },
                enabled: false,
                verticalAlign: "middle",
            },
        },
        plotOptions: {
            series: {},
            column: {
                maxPointWidth: 15,
                stacking: "normal",
                pointPadding: 0,
                groupPadding: 0,
                dataLabels: {
                    enabled: false,
                },
            },
        },
        series: [

        ],
        credits: {
            enabled: false,
        },
    };

    chartOptions: Highcharts.Options = {
        title: {
            text: "",
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        },
        chart: {
            // width: '80%'
        },
        subtitle: {
            text: "",
        },
        legend: {
            enabled: false,
        },
        xAxis: {
            categories: this.myCategory,
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            softMax: 1,
            softMin: -1,
            min: -1,
            max: 1,

            gridLineWidth: 0,
            // labels: {
            //     formatter(): string {
            //         //   return '' + this.value.toLocaleString();

            //         const myL =
            //             Math.abs(parseFloat(this.value.toString())) === 0 ||
            //                 Math.abs(parseFloat(this.value.toString())) === 1
            //                 ? this.value.toLocaleString()
            //                 : "";
            //         return "" + myL;
            //     },
            // },
            labels: {
                rotation: 0,
                align: "center",
                // x:0,
                style: {
                    //  wordBreak: 'break-all',
                    textOverflow: 'none',
                    whiteSpace: 'nowrap',
                    // fontSize:'9px'
                },
                formatter: function () {
                    if (this.value === 1) {
                        return '+' + this.value + '<br>POSITIVE<br>SENTIMENT';
                    } else if (this.value === -1) {
                        return this.value + '<br>NEGATIVE<br>SENTIMENT';
                    } else if (this.value === 0)
                        return '0';
                }
            },

            title: { text: "" },
            lineWidth: 1,
            stackLabels: {
                style: {
                    color: "black",
                },
                enabled: false,
                verticalAlign: "middle",
            },
        },

        tooltip: {
            backgroundColor: "black",
            shared: true,
            useHTML: true,
            headerFormat: "<b>{point.key}</b><table>",
            pointFormat:
                "<tr><td>{series.name}: </td>" +
                '<td style="text-align: right"><b>{point.y} </b></td></tr>' +
                "<tr><td>% Change: </td>" +
                '<td><b>{point.change}% </b></td></tr>' +
                "<tr><td>ESG: </td>" +
                '<td><b>{point.esg} </b></td></tr>',
            footerFormat: "</table>",
            valueDecimals: 2,
            borderColor: "transparent",

            style: {
                color: "white",
            },
        },

        plotOptions: {
            series: {
                point: {
                    events: {
                        click: (event) => {
                            // alert('Category: ' + event.point.category + ', value: ' + event.y);
                            this.getClientStock(event.point.category);
                        },
                    },
                },
            },
        },
        series: [
            {
                name: "Sentiment",
                type: "bar",
                pointWidth: 10,
                data: this.myData,


                // data: [29.9, 71.5, 106.4, -129.2, 144.0, -176.0, 135.6, -148.5, 216.4, -194.1, 95.6, 54.4]
            },
        ],
        credits: {
            enabled: false,
        },

    };

    onPointSelect(event) {
        var data = this.clientholdingdetails.filter(e => e.name === event.point.category)[0];
        this.onRowClick(data)
    }

    onRowClick(clientItem: any) {
        this.myservice.navigateToClientPortfolio(clientItem);
    }
}
