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
    positvenegativeDetails: [];
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
    getClientStock(ticker) {
        // alert(ticker)
        document.querySelector("#impactgraph").scrollIntoView();
        this.clientMostImpactedByStock = "";
        this.clientMostImpactedGraphs = false;

        let _mySecurity = [
            ...this.positvenegativeDetails["top"],
            ...this.positvenegativeDetails["bottom"],
        ].find((p) => p.Ticker === ticker);
        // alert(mySecurity);

        let mySecurity = (_mySecurity && _mySecurity.SecurityID) || "";

        if (_mySecurity) {
            this.myservice
                .getMarketSentimentByClient(1, mySecurity)
                .subscribe((data) => {
                    this.marketsentimentclientDetails = data["data"];
                    let marketsentimentcategory = this.marketsentimentclientDetails.map(
                        (p) => {
                            return p.clientName;
                        }
                    );
                    let marketsentimentdata1 = this.marketsentimentclientDetails.map(
                        (p) => {
                            var _t = {};
                            _t["y"] = Number.parseFloat(p.sec_mkt_val.replace(/,/g, ""));
                            _t["ticker"] = p.ticker;
                            // _t["stockPercent"] = p.particularStkPct;
                            return _t;
                        }
                    );
                    let marketsentimentdata2 = this.marketsentimentclientDetails.map(
                        (p) => {
                            var _t = {};
                            _t["y"] = Number.parseFloat(p.tot_mkt_val.replace(/,/g, ""));
                            _t["ticker"] = p.ticker;
                            _t["stockPercent"] = p.particularStkPct;
                            _t["symbol"] = p.currency_symbol;
                            return _t;
                            // return Number.parseFloat(p.tot_mkt_val.replace(/,/g, ""));
                            // return Number.parseFloat(p.sec_mkt_val.replace(/,/g, '')) + 50;;
                        }
                    );
                    let myData;
                    let data1 = {
                        data: marketsentimentdata1,
                        color: "blue",
                        // name: "series2Test",
                        keys: ['y', 'ticker'],
                        tooltip: {
                            pointFormat: ''
                        }
                    };
                    let data2 = {
                        data: marketsentimentdata2,
                        color: "darkgray",
                        tooltip: {

                            pointFormat: '{point.ticker} stock: {point.stockPercent}% of portfolio<br>Total Portfolio: {point.symbol}{point.y:,.0f}'
                        }
                    };
                    data2["data"] = marketsentimentdata2;
                    data2["color"] = "darkgray";
                    let tmydata = [];
                    tmydata.push(data2);
                    tmydata.push(data1);
                    const finaldata = [];
                    finaldata.push({
                        // name: 'second last',
                        data: tmydata,
                    });
                    this.chartOptionsstockgraph.series = tmydata;
                    this.chartOptionsstockgraph.xAxis["categories"] =
                        marketsentimentcategory;
                    this.updateFlagstock = true;
                    this.clientMostImpactedGraphs = true;
                    this.clientMostImpactedByStock = ticker;
                });
        }
        this.myservice.NewsData(1, mySecurity.toString(), 'date').subscribe(
            (data) => {
                this.newsoccuranceerror = false;
                this.newsDetails = data["data"];
                this.newsDetails.sort(this.mySortBy('Sentiment_score', 'asc'))
            },
            (error) => {
                // this.errors = error;
                this.newsoccuranceerror = true;
                // alert(error)
            }
        );
    }
    ngOnInit(): void {
        this.myservice.getClientholding(1, 'negSentScore', 'asc').subscribe((data) => {
      this.clientholdingdetails = data["data"];
    });
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        this.myservice.NewsData(1, "", 'date').subscribe((data) => {
            this.newsoccuranceerror = false;
            this.newsDetails = data["data"];
            this.newsDetails.sort(this.mySortBy('Sentiment_score', 'asc'))
        });
        this.myservice.getPositveNegative(1).subscribe((data) => {
            this.positvenegativeDetails = data["data"];

            // var myData=  this.positvenegativeDetails["top"].map(p=>{
            //   return(p.sent_score)
            //  })
            //  myData = [...myData, ... this.positvenegativeDetails["bottom"].map(p=>{
            //   return(p.sent_score)
            //  })]
            console.log("MKtsentscore***", this.positvenegativeDetails);
            var myData = this.positvenegativeDetails["top"].map((p) => {
                var _t = {};
                _t["y"] = p.sent_score;
                _t["color"] = "#039D00";
                _t["change"] = p.priceChangePct;
                _t["esg"] = p.esg_score;

                return _t;
            });
            myData = [
                ...myData,
                ...this.positvenegativeDetails["bottom"].map((p) => {
                    var _t = {};
                    _t["y"] = p.sent_score;
                    _t["color"] = "#B50000";
                    _t["change"] = p.priceChangePct;
                    _t["esg"] = p.esg_score;
                    return _t;
                }),
            ];
            var myCategory = this.positvenegativeDetails["top"].map((p) => {
                return p.Ticker;
            });
            myCategory = [
                ...myCategory,
                ...this.positvenegativeDetails["bottom"].map((p) => {
                    return p.Ticker;
                }),
            ];
            const finaldata = [];
            finaldata.push({
                data: myData,
            });
            this.myData = myData;
            this.myCategory = myCategory;
            this.chartOptions.series = finaldata;
            this.chartOptions.xAxis["categories"] = myCategory;
            this.updateFlag = true;
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
            useHTML: true,
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '{point.y:,.0f}',

            shared: true,
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

    onPointSelect(event){
        var data = this.clientholdingdetails.filter(e => e.name === event.point.category)[0];
        this.onRowClick(data)
    }

    onRowClick(clientItem: any) {
        this.myservice.navigateToClientPortfolio(clientItem);
    }
}
