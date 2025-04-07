import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Color } from "ng2-charts";
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: "app-graph-test",
  templateUrl: "./graph-test.component.html",
  styleUrls: ["./graph-test.component.css"],
})
export class GraphTestComponent implements OnInit {
  @Input() clientID;
  doughnutDataBySector;
  sectorName;
  mktValueAndSentimentsFaCli;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "white",
          },
          // barPercentage: 0.5,
          categoryPercentage: 0.4,
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "white",
          },
        },
      ],
    },
  };
  public barChartLabels: string[];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;
  public barChartColors: Color[] = [
    { backgroundColor: "royalblue" },
    { backgroundColor: "darkgray" },
  ];

  public barChartData: any[] = [
    { data: [], label: "Current weightage" },
    { data: [], label: "Model recommended weightage" },
  ];
  constructor(
    private dataService: DataserviceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.dataService
      .getMktValueAndSentimentsFaCli(1, this.clientID)
      .subscribe((response) => {
        if (response && response["data"] && response["data"].length) {
          this.mktValueAndSentimentsFaCli = response["data"];

          this.barChartLabels = response["data"].map(
            (item) => item["sectorName"]
          );
          response["data"].forEach((item) => {
            this.barChartData[0].data.push(parseFloat((item["crntweight"]).toFixed(2)));
            this.barChartData[1].data.push(parseFloat((item["recmdweight"]).toFixed(2)));
          });
        }
      });
  }


  chartClicked(event) {
    if (
      event &&
      event.active &&
      event.active[0] &&
      event.active[0]._view &&
      event.active[0]._view.label
    ) {
      this.sectorName = event.active[0]._view.label;
      const sectorId = this.getSectorIdByName(this.sectorName);

      this.http
        .post(
          this.dataService.apiUrlPath + "/fac/getMktValueAndSentimentsFaCliSec",
          { faid: 1, clientid: this.clientID, sectorid: sectorId }
        )
        .subscribe((response) => {
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

  chartHovered(event) {}
}
