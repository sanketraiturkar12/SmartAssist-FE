import { Component, Input, OnInit } from "@angular/core";

import { DataserviceService } from "../dataservice.service";

import * as Highcharts from "highcharts";
@Component({
  selector: "app-client-graph",
  templateUrl: "./client-graph.component.html",
  styleUrls: ["./client-graph.component.css"],
})
export class ClientGraphComponent implements OnInit {
  @Input() clientID;
  Highcharts: typeof Highcharts = Highcharts;
  tumgraphbasicweeklyLabel;
  updateFlag: true;
  portfolioDetails: any[];
  marketscorecardDetails: any[];
  marketscorecardDetail: any;

  tumgraphdata: any;

  tumgraphbasictotalinfo: any;
  tumgraphbasictotaldate: any;
  tumgraphbasictotalsymbol: any[];
  tumgraphbasicfilter: any[];

  tumgraphbasicdaily: any;
  tumgraphbasicweekly: any;

  tumgraphdailyarrow: any;
  tumgraphweeklyarrow: any;

  tumgraphdailypercentage: any;
  tumgraphweeklypercentage: any;

  marketoccuranceerror: any;
  selectedFilter: string;
  series1 = [];
  series2 = [];
  series3 = [];
  series4 = [];
  series5 = [];
  series6 = [];

  sortBy(field): any {
    return function (a, b) {
      return Number(a[field] > b[field]) - Number(a[field] < b[field]);
    };
  }

  graphTotalAsset(filter) {
    this.selectedFilter = filter;
    this.series1 = [];
    this.series2 = [];
    this.series3 = [];
    this.series4 = [];
    this.series5 = [];
    this.series6 = [];
    this.myservice
      .getAUMGraphDetails(1, filter, this.clientID)
      .subscribe((data) => {
        this.tumgraphdata = data["data"];
        this.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
        this.tumgraphbasicweekly = data["aum"]["weekly"]["val"];
        this.tumgraphweeklyarrow =
          data["aum"]["weekly"]["changeType"] == 1 ? true : false;
        this.tumgraphdailypercentage = data["aum"]["weekly"]["symbol"];
        this.tumgraphweeklypercentage = data["aum"]["weekly"]["symbol"]
        // let myAbc1 = [];
        // const finaldata = [];
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
        this.chartOptions.series[2]['data'] = this.series3.sort(this.sortBy('x'))
        this.chartOptions.series[3]['data'] = this.series4.sort(this.sortBy("x"));
        this.chartOptions.series[4]['data'] = this.series5.sort(this.sortBy('x'))
        this.chartOptions.series[5]['data'] = this.series6.sort(this.sortBy('x'))

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

  data2 = [];

  abc1 = [];
  // xyz = this.data2.map((p) => {
  //   const abc = {};
  //   abc["x"] = p.datetime;
  //   abc["y"] = p.total_mkt_val.replace(/,/g, "") - 0;
  //   // this.abc1.push(abc);
  //   this.abc1.push(abc);
  //   this.abc2.push({ x: p['datetime'], y: Number.parseFloat(p['sent_score_y2'].toFixed(2)) })
  //   this.abc3.push({ x: p['datetime'], y: Number.parseFloat(p['sent_score_y1'].toFixed(2)) })
  // });

  constructor(
    private myservice: DataserviceService
  ) { }

  ngOnInit(): void {
    this.myservice
      .getAUMGraphDetails(1, "week", this.clientID)
      .subscribe((data) => {
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
        this.chartOptions.series[2]['data'] = this.series3.sort(this.sortBy('x'))
        this.chartOptions.series[3]['data'] = this.series4.sort(this.sortBy("x"));
        this.chartOptions.series[4]['data'] = this.series5.sort(this.sortBy('x'))
        this.chartOptions.series[5]['data'] = this.series6.sort(this.sortBy('x'))

        this.updateFlag = true;
        this.tumgraphbasictotaldate = data["aum"]["total"]["date"];
        this.tumgraphbasictotalinfo = data["aum"]["total"]["val"];
        this.tumgraphbasictotalsymbol = data["aum"]["total"]["symbol"];

        this.tumgraphbasicdaily = data["aum"]["daily"]["val"];
        this.tumgraphbasicweeklyLabel = data["aum"]["weekly"]["displayStr"];
        this.tumgraphbasicweekly = data["aum"]["weekly"]["val"];

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
        stacking: "normal"
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

  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: "area",
  //     height: (5.5 / 25) * 100 + "%", // 16:9 ratio
  //     width: 700,
  //   },

  //   legend: {
  //     enabled: false,
  //   },

  //   xAxis: {
  //     type: "datetime",
  //     showLastLabel: true,
  //     labels: {
  //       formatter(): string {
  //         return (
  //           new Date(this.value).toString().substring(8, 10) +
  //           " " +
  //           new Date(this.value).toString().substring(4, 7).toUpperCase()
  //         );
  //       },
  //     },
  //   },
  //   yAxis: {
  //     gridLineWidth: 0,
  //     title: { text: "" },

  //     labels: {
  //       formatter() {
  //         return "$" + this.value.toLocaleString();
  //       },
  //     },
  //   },

  //   tooltip: {
  //     borderColor: "black",
  //     borderWidth: 1,
  //     backgroundColor: "black",
  //     formatter(): string {
  //       return (
  //         "" +
  //         new Date(this.x).toString().substring(8, 10) +
  //         " " +
  //         new Date(this.x).toString().substring(4, 7).toUpperCase() +
  //         ": " +
  //         "$" +
  //         this.y.toLocaleString() +
  //         ""
  //       );
  //     },

  //     style: {
  //       color: "white",
  //     },
  //   },
  //   rangeSelector: {
  //     selected: 1,
  //   },
  //   title: {
  //     text: " ",
  //   },
  //   series: [
  //     {
  //       name: " ",
  //       pointInterval: 24 * 3600 * 1000,
  //       data: this.abc1,
  //       type: "area",
  //       threshold: null,
  //       tooltip: {
  //         valueDecimals: 2,
  //       },

  //       marker: {
  //         enabled: false,
  //       },

  //       fillColor: {
  //         linearGradient: {
  //           x1: 0,
  //           y1: 0,
  //           x2: 0,
  //           y2: 1,
  //         },
  //         stops: [
  //           [0, Highcharts.getOptions().colors[0]],
  //           [
  //             1,
  //             Highcharts.color(Highcharts.getOptions().colors[0])
  //               .setOpacity(0)
  //               .get("rgba")
  //               .toString(),
  //           ],
  //         ],
  //       },
  //     },
  //   ],
  //   credits: {
  //     enabled: false,
  //   },
  // };
}
