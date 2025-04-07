import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../dataservice.service";

import * as Highcharts from "highcharts";

@Component({
  selector: "app-graphs",
  templateUrl: "./graphs.component.html",
  styleUrls: ["./graphs.component.css"],
})
export class GraphsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  updateFlag: true;
  portfolioDetails: any[];
  marketscorecardDetails: any[];
  marketscorecardDetail: any;

  tumgraphdata: any;

  tumgraphbasictotalinfo: any;
  tumgraphbasictotaldate: any;
  tumgraphbasictotalsymbol: any;
  tumgraphbasicfilter: any[];

  tumgraphbasicdaily: any;
  tumgraphbasicweekly: any;
  tumgraphbasicweeklyLabel;

  tumgraphdailyarrow: any;
  tumgraphweeklyarrow: any;

  tumgraphdailypercentage: any;
  tumgraphweeklypercentage: any;

  marketoccuranceerror: any;
  selectedFilter: string;
  data2 = [];
  series1 = [];
  series2 = [];
  series3 = [];
  series4 = [];
  series5 = [];
  series6 = [];
  comment: string = "<p><em><strong>abc</strong></em></p>";

  sortBy(field): any {
    return function (a, b) {
      return Number(a[field] > b[field]) - Number(a[field] < b[field]);
    };
  }

  graphTotalAsset(filter) {
    this.selectedFilter = filter;
    this.myservice.tumGraph(1, filter).subscribe((data) => {
      this.series1 = [];
      this.series2 = [];
      this.series3 = [];
      this.series4 = [];
      this.series5 = [];
      this.series6 = [];
      this.tumgraphdata = data["data"];
      this.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
      this.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
      this.tumgraphweeklyarrow =
        data["aum"]["weekly"]["changeType"] == 1 ? true : false;
      this.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
      this.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"];

      let myAbc1 = [];
      const finaldata = [];

      this.tumgraphdata.map(value => {
        const abc = {};
        abc["x"] = value['datetime'];
        abc["y"] = Number.parseFloat(value['negative_mkt_val'].replace(/,/g, ""));
        abc['total'] = value.total_mkt_val.toLocaleString('en-US')
        this.series1.push(abc);
        this.series2.push({ x: value['datetime'], y: Number.parseFloat(value['positive_mkt_val'].replace(/,/g, "")) })
        this.series3.push({ x: value['datetime'], y: Number.parseFloat(value['total_mkt_val'].replace(/,/g, "")) })
        this.series4.push({ x: value['datetime'], y: Number.parseFloat(value['sent_score_y2'].toFixed(2)), percent: value['positive_Share'] })
        this.series5.push({ x: value['datetime'], y: Number.parseFloat(value['sent_score_y1'].toFixed(2)), percent: value['negative_Share'] })
        this.series6.push({ x: value['datetime'], y: Number.parseFloat(value['esg_score']) })

      });
      this.chartOptions.series[0]['data'] = this.series2.sort(this.sortBy("x"));
      this.chartOptions.series[1]['data'] = this.series1.sort(this.sortBy("x"));
      this.chartOptions.series[2]['data'] = this.series3.sort(this.sortBy('x'))
      this.chartOptions.series[3]['data'] = this.series4.sort(this.sortBy("x"));
      this.chartOptions.series[4]['data'] = this.series5.sort(this.sortBy('x'))
      this.chartOptions.series[5]['data'] = this.series6.sort(this.sortBy('x'))


      // finaldata.push({
      //   // name: 'second last',
      //   data: myAbc1,
      // });
      // this.chartOptions.series = finaldata;
      this.updateFlag = true;
    });
  }

  graphMeterScaleActive(filter: string): boolean {
    if (filter == this.selectedFilter) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private myservice: DataserviceService) { }


  ngOnInit(): void {
    this.myservice.getportfolioScore(1).subscribe((data) => {
      this.portfolioDetails = data["data"];

      if (this.portfolioDetails["symbol"] === "up-arrow") {
        this.portfolioDetails["mysymbol"] = true;
      } else {
        this.portfolioDetails["mysymbol"] = false;
      }

    });

    this.myservice.getmarketScorecard(1).subscribe(
      (data) => {

        this.marketscorecardDetails = data["data"];
        this.marketscorecardDetail = data["data"][data["data"].length - 1];
        // this.marketscorecardDetail = {
        //   "changeSentScore": 'No change',
        //   "marketSentScore": 'Neutral', "symbol": 'neutral'
        // }
        // if (this.marketscorecardDetail["symbol"] === "up-arrow") {
        //   this.marketscorecardDetail["mysymbol"] = true;
        // } else {
        //   this.marketscorecardDetail["mysymbol"] = false;
        // }
      },
      (error) => {
        this.marketoccuranceerror = error && error.error && error.error.message;
      }
    );
    this.myservice.tumGraph(1, "week").subscribe((data) => {
      this.tumgraphdata = data["data"];
      this.tumgraphdata.map(value => {
        const abc = {};
        abc["x"] = value['datetime'];
        abc["y"] = Number.parseFloat(value['negative_mkt_val'].replace(/,/g, ""));
        // abc['total'] = value.total_mkt_val.toLocaleString('en-US')
        this.series1.push(abc);
        this.series2.push({ x: value['datetime'], y: Number.parseFloat(value['positive_mkt_val'].replace(/,/g, "")) })
        this.series3.push({ x: value['datetime'], y: Number.parseFloat(value['total_mkt_val'].replace(/,/g, "")) })
        this.series4.push({ x: value['datetime'], y: Number.parseFloat(value['sent_score_y2'].toFixed(2)), percent: value['positive_Share'] })
        this.series5.push({ x: value['datetime'], y: Number.parseFloat(value['sent_score_y1'].toFixed(2)), percent: value['negative_Share'] })
        this.series6.push({ x: value['datetime'], y: Number.parseFloat(value['esg_score']) })
      });
      this.chartOptions.series[0]['data'] = this.series2.sort(this.sortBy("x"));
      this.chartOptions.series[1]['data'] = this.series1.sort(this.sortBy("x"));
      this.chartOptions.series[2]['data'] = this.series3.sort(this.sortBy("x"));
      this.chartOptions.series[3]['data'] = this.series4.sort(this.sortBy("x"));
      this.chartOptions.series[4]['data'] = this.series5.sort(this.sortBy("x"));
      this.chartOptions.series[5]['data'] = this.series6.sort(this.sortBy("x"));
      this.updateFlag = true;
      this.tumgraphbasictotaldate = data["aum"]["total"]["date"];
      this.tumgraphbasictotalinfo = data["aum"]["total"]["val"];
      this.tumgraphbasictotalsymbol = data["aum"]["total"]["symbol"];

      this.tumgraphbasicdaily = data["aum"]["daily"]["val"];
      this.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
      this.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];

      this.tumgraphdailyarrow =
        data["aum"]["daily"]["changeType"] == 1 ? true : false;
      this.tumgraphweeklyarrow =
        data["aum"]["weekly"]["changeType"] == 1 ? true : false;

      this.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
      this.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"];

      this.tumgraphbasicfilter = data["filter"];
      this.selectedFilter = this.tumgraphbasicfilter[0].val;
    });
  }

  chartOptions: Highcharts.Options = {
    chart: {
      height: (6.5 / 25) * 100 + "%", // 16:9 ratio
      events: {
        render: function () {
          let series = this.series.filter(i => i.name !== 'Total AUM');
          const totalAUMIndex = this.series.findIndex(i => i.name === 'Total AUM');
          let count = 0;

          series.forEach(serie => {
            if (serie.visible) {
              count++
            }
          })
          if (count === 0) {
            this.series[totalAUMIndex]['color'] = 'darkgray';
            this.series[totalAUMIndex].render();
          } else {
            this.series[totalAUMIndex]['color'] = 'transparent';

            this.series[totalAUMIndex].render();

          }

          // document.querySelector("#label").innerHTML = `Total visible series: ${count}`
        }
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%d %b}'
      },
      minPadding: 0,
      maxPadding: 0,
      showLastLabel: true,
      tickmarkPlacement: 'on',
      endOnTick: false,
    },
    yAxis: [{
      gridLineWidth: 0,
      lineWidth: 1,
      title: { text: "AUM (USD)" },
    },
    {
      visible: false
    },
    {
      visible: false
    },
    {
      lineWidth: 0,
      gridLineWidth: 0,
      opposite: true,
      offset: -8,
      title: {
        text: '+ve Sentiment',
        style: {
          color: 'limegreen'
        }
      },
    }, {
      lineWidth: 1,
      opposite: true,
      gridLineWidth: 0,
      title: {
        text: '-ve Sentiment',
        style: {
          color: 'red'
        }
      }
    }, {
      lineWidth: 1,
      opposite: true,
      gridLineWidth: 0,
      title: {
        text: 'ESG',
        style: {
          color: 'purple'
        }
      }
    }
    ],
    legend: {
      layout: 'horizontal',
      align: "center",
      verticalAlign: 'top',
    },
    tooltip: {
      backgroundColor: "black",
      useHTML: true,
      headerFormat: '<b>{point.key}</b><br>',
      shared: true,
      style: {
        color: "white",
      },
    },
    title: {
      text: " ",
    },
    plotOptions: {
      area: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "-ve AUM",
        data: [],
        type: "area",
        tooltip: {
          pointFormat: ''
        },
        marker: {
          enabled: false,
        },
      },
      {
        data: [],
        name: '+ve AUM',
        type: "area",
        tooltip: {
          pointFormat: ''
        },
        marker: {
          enabled: false,
        },
        color: 'lightgray'
      },
      {
        type: "area",
        name: "Total AUM",
        showInLegend: false,
        color: "transparent",
        tooltip: {
          pointFormat: '{point.series.name}: ${point.y}<br>'
        },
        stacking: null,
        lineColor: 'transparent',
        marker: {
          lineColor: 'transparent',
          fillColor: 'tranparent',
          enabled: false
        },
        states: {
          hover: {
            enabled: false
          }
        },
      }
      ,
      {
        type: "line",
        name: "+ve Sentiment",
        yAxis: 3,
        color: 'green',
        dashStyle: "Solid",
        marker: {
          enabled: false,
        },
        tooltip: {
          pointFormat: '{point.series.name}: {point.y} ({point.percent} % of AUM)<br>'
        }

      }, {
        type: "line",
        name: "-ve Sentiment",
        yAxis: 4,
        color: 'red',
        dashStyle: "ShortDash",
        marker: {
          enabled: false,
        },
        tooltip: {
          pointFormat: '{point.series.name}: {point.y} ({point.percent} % of AUM)'
        }
      }, {
        type: "line",
        name: "ESG",
        yAxis: 5,
        tooltip: {
          pointFormat: '<br>{point.series.name}: {point.y}'
        },
        marker: {
          enabled: false,
        },
        color: 'purple',
      }
    ],
    credits: {
      enabled: false,
    },
  };

  checkNumberValue(value){
    if(value == 0){
      return 'neutral'
    }
    if (value > 0) {
      return true;
    } else {
      return false;
    }
  }
}


