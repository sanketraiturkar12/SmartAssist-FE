import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sector-doughnut',
  templateUrl: './sector-doughnut.component.html',
  styleUrls: ['./sector-doughnut.component.css']
})
export class SectorDoughnutComponent implements OnInit, OnChanges {
  Highcharts: typeof Highcharts = Highcharts;
  @Input() data;
  updateFlag: true;
  piechart: Highcharts.Options = {
    title: {
      text: "",
    },
    credits: {
      enabled: false
    },
    chart: {
      type: "pie",
    },

    tooltip: {
      borderColor: "black",
      backgroundColor: "black",
      formatter(): string {
        return (
          "<b>" +
          this.key +
          "</b><br> " +
          this.y.toLocaleString() +
          "% of " + this.point['sector'] + " Stock" +
          "</b><br> " +
          +this.point['overAll'].toLocaleString() +
          "% of overall portfolio<br> ESG: " + this.point['esg']
        );
      },

      style: {
        color: "white",
        fontFamily: 'Source Sans Pro'
      },
    },

    legend: {
      enabled: true,
      align: "center",
      borderWidth: 0,
      layout: "horizontal",
      verticalAlign: "bottom",

    },
    plotOptions: {

      pie: {
        innerSize: '78%',
      },
      series: {
        showInLegend: true,
        dataLabels: {
          enabled: false,
          format: "{point.name}: {point.y:.1f}%",
        },
      },
    },

    series: [
      {

        type: "pie", // line
        data: [
          {
            name: "Chrome",
            y: 10.41,
            selected: true,
            color: "#95ceff",
          },
          {
            name: "Internet Explorer",
            y: 8.84,
            color: "#56abf5",
          },
          {
            name: "Firefox",
            y: 10.85,
            color: "#135c9c",
          },
          {
            name: "Edge",
            y: 4.67,
            color: "#0a2c4a",
          },
          {
            name: "Other",
            y: 2.61,
            color: "#2092f5",
          },
        ],
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      // this.data.sort(function (a, b) { return b.sectorStockPct - a.sectorStockPct })
      let myData = this.data.map((p) => {
        let _t = {};
        _t["name"] = p.Ticker;
        _t["y"] = p.sectorStockPct;
        _t['overAll'] = p.overallStockPct
        _t['sector'] = p.sectorName;
        _t['esg'] = p.esg_score
        return _t;
      });
      let finaldata = [];
      finaldata.push({
        // name: 'second last',
        data: myData,
      });
      this.piechart.series = finaldata;
      this.updateFlag = true;
    }

  }

  ngOnChanges() {
    if (this.data) {
      // this.data.sort(function (a, b) { return b.sectorStockPct - a.sectorStockPct })
      let myData = this.data.map((p) => {
        let _t = {};
        _t["name"] = p.Ticker;
        _t["y"] = p.sectorStockPct;
        _t['overAll'] = p.overallStockPct
        _t['sector'] = p.sectorName;
        _t['esg'] = p.esg_score

        return _t;
      });
      let finaldata = [];
      finaldata.push({
        // name: 'second last',
        data: myData,
      });
      this.piechart.series = finaldata;
      this.updateFlag = true;
    }

  }

}
