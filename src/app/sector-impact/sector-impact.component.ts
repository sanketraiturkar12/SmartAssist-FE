import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-sector-impact',
  templateUrl: './sector-impact.component.html',
  styleUrls: ['./sector-impact.component.css']
})
export class SectorImpactComponent implements OnInit, OnChanges {
  @Input() clientID;
  showDoughnut;
  mktValueAndSentimentsFaCli;
  sectorName: string;
  doughnutDataBySector: any = [];
  barChartData: any = [
    {
      name: 'Current weightage',
      color: 'royalblue',
      type: 'column',

      data: []
    },
    {
      name: 'Model recommended weightage',
      color: 'darkgray',
      type: 'column',
      data: []
    },
    {
      name: 'ESG',
      color: 'transparent',
      type: 'column',
      data: [],
      showInLegend: false,
      // pointPadding: 0,
      // borderWidth: 0,
      // groupPadding: 0,
      // // borderRadius: 5,
      // pointWidth: 0
    }
  ]
  Highcharts: typeof Highcharts = Highcharts;
  updateFlag: true;

  constructor(private dataService: DataserviceService, private http: HttpClient) { }

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: ''
    },
    xAxis: {
      startOnTick: true,
// top:5,
      categories: [

      ],
      labels: {
        //   formatter: function () {
        //     // return this.value.toString().replace(/ /g, '<br />');
        //     if(this.value.toString().length< 10){
        //       return this.value.toString();
        //     } else{
        //       return this.value.toString().substring(0, 9) + '...'
        //     }
        // }
      }
    },
    yAxis: {
      min: 0,
offset: 5,
      gridLineWidth: 0,
      labels: {
        format: '{value}'
      },
      title: {
        text: ''
      },
    },
    legend: {
      verticalAlign: 'top',
      symbolWidth: 35,
      symbolRadius: 5,
      squareSymbol: false,
      itemStyle: {
        color: '#222222',
        fontWeight: '400',
        fontFamily: 'Source Sans Pro'
      }
    },
    tooltip: {
      backgroundColor: "black",
      shared: true,
      useHTML: true,
      headerFormat: "<b>{point.key}</b><table>",
      pointFormat: 
        "<tr><td>{series.name}: </td>" +
        '<td style="text-align: right"><b>{point.y} %</b></td></tr>',
      footerFormat: "</table>",
      valueDecimals: 2,
      borderColor: "transparent",
      style: {
        color: "white",
        fontFamily: 'Source Sans Pro'
      },
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click: (event) => {
              this.onPointSelect(event.point.category);
            },
          },
        },
      },
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0.28,
        // borderRadius: 5,
        pointWidth: 8
      },

    },
    credits: {
      enabled: false
    },
    series: [
    ],
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
              y: 0
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
    }
  };

  ngOnInit(): void {
    this.dataService.castValue.subscribe((value) => this.showDoughnut = value)
    this.dataService
      .getMktValueAndSentimentsFaCli(1, this.clientID)
      .subscribe((response) => {
        if (response && response["data"] && response["data"].length) {
          this.mktValueAndSentimentsFaCli = response["data"];
          let barChartCategories = response["data"].map(
            (item) => item["sectorName"]
          );
          response["data"].forEach((item) => {
            this.barChartData[0].data.push(parseFloat((item["crntweight"])));
            this.barChartData[1].data.push(parseFloat((item["recmdweight"])));
            this.barChartData[2].data.push(parseFloat((item["esg_score"])));
          });
          this.chartOptions.series = [...this.barChartData];
          this.chartOptions.xAxis["categories"] =
            barChartCategories;
          this.updateFlag = true;
        }
      });
  }

  ngOnChanges() {
    // this.dataService.castValue.subscribe((value) => this.showDoughnut = value)
  }

  onPointSelect(category: string) {
    this.doughnutDataBySector = [];

    if (category) {
      this.sectorName = category;
      const sectorId = this.getSectorIdByName(this.sectorName);

      this.http
        .post(
          this.dataService.apiUrlPath + "/fac/getMktValueAndSentimentsFaCliSec",
          { faid: 1, clientid: this.clientID, sectorid: sectorId }
        )
        .subscribe((response) => {
          this.dataService.sendValue(true);
          if (response && response['data']) {
            this.doughnutDataBySector = response['data'];
          }
        });
    }
  }

  getSectorIdByName(name) {
    const obj = this.mktValueAndSentimentsFaCli.find((item) => {
      return item["sectorName"] === name;
    });
    return obj["sectorID"];
  }

}




