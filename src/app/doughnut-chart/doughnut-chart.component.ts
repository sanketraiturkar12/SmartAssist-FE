import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"],
})
export class DoughnutChartComponent implements OnInit, OnChanges {
  @Input() data: any;

  public chartType: string = "doughnut";
  public chartLabels = [];
  public chartData = [];
  donutColors = [
    {
      backgroundColor: [
        "rgb(1,31,75)",
        "rgb(3,57,108)",
        "rgb(0,91,150)",
        "rgb(100,151,177)",
        "rgb(179,205,224)",
      ],
    },
  ];

  public chartOptions: any = {
    cutoutPercentage: 85,
    legend: {
      position: "bottom",
    },
  };

  constructor() {}

  ngOnInit(): void {
    if (this.data) {
      this.chartLabels = this.data.map((item) => {
        return item["Ticker"];
      });
      this.chartData = this.data.map((item) => {
        return item["sectorStockPct"];
      });
    }
  }
  ngOnChanges() {
    if (this.data) {
      this.chartLabels = this.data.map((item) => {
        return item["Ticker"];
      });
      this.chartData = this.data.map((item) => {
        return item["sectorStockPct"];
      });
    }
  }
}
