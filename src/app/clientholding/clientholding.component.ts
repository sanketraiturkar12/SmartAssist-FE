import { Component, ElementRef, OnInit } from "@angular/core";

import { DataserviceService } from "../dataservice.service";

import * as Highcharts from "highcharts";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-clientholding",
  templateUrl: "./clientholding.component.html",
  styleUrls: ["./clientholding.component.css"],
})
export class ClientholdingComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartData
  insightdetails: any[];
  shortClassName = '';
  shortClassCNG = '';
  shortClassPSentiment = 'headerSortUp';
  shortClassNSentiment = '';
  shortClassAUM = '';
  shortClassTotal = '';
  shortClientName = '';
  shortClientPct = '';
  expandAll = false;
  clientDataList: any[] = [];
  
  clientholdingdetails: any[];
  additionalData = [
  ];
  modalRow: any;
  clientDetails: any;
  userDetails: any;
  clientNames: any;

  constructor(
    private myservice: DataserviceService,
    private elRef: ElementRef,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.myservice.getuserName(1).subscribe((data) => {
      this.userDetails = data["data"][0];
    });
    this.myservice.inSight(1).subscribe((data) => {
      this.insightdetails = [...data["data"], ...this.additionalData];
    });

    this.myservice.getClientholding(1, 'negSentScore', 'asc').subscribe((data) => {
      this.clientholdingdetails = data["data"];
      this.chartData = JSON.parse(JSON.stringify(data["data"]));
      this.chartData.sort(function (a, b) { return b.ofOverall - a.ofOverall })
      let myData = this.chartData.map((p) => {
        let _t = {};
        _t["name"] = p.name;
        _t["y"] = p.ofOverall;
        _t["custom"] = p.esg_score;
        return _t;
      });
      let finaldata = [];
      finaldata.push({
        data: myData,
      });
      this.piechart.series = finaldata;
      this.updateFlag = true;

    });

  }

  updateFlag: true;
  piechart: Highcharts.Options = {
    title: {
      text: "",
    },
    credits: {
      enabled: false
    },
    chart: {
      // width: '',
      // height: 350,

    },

    tooltip: {
      borderColor: "black",
      borderWidth: 1,
      backgroundColor: "black",

      formatter(): string {
        return (
          "<b>" +
          this.key +
          "</b><br> " +
          +this.y.toLocaleString() +
          "% of overall portfolio" +
           "</b><br> " +
          'ESG ' +
          + this.point.options.custom
          );
      },

      style: {
        color: "white",
      },
    },

    legend: {
      enabled: true,
      align: "right",
      borderWidth: 0,
      
      layout: "vertical",
      verticalAlign: "top",
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ["35%", "40%"],
      },
      series: {
        showInLegend: true,
        dataLabels: {
          enabled: false,
          format: "{point.name}: {point.y:.1f}% {point.custom:.1f}",
        },
      },
    },

    series: [
      {
        size: "80%",
        innerSize: "70%",
        type: "pie", // line
        data: []
      },
    ],
  };

  public getId(data: string): string {
    return "collapse" + data;
  }
  public getIconID(id: string): string {
    return "icon" + id;
  }

  public getTargetData(data: string): string {
    return "#collapse" + data;
  }

  public getClientData(item){
    var navigateData = this.clientholdingdetails.filter(e=> e.clientID === Number(item.id))[0];
    this.onRowClick(navigateData);
  }

  onClickOnPanel(event: any, pannelId: number) {
    const element = event.target.closest(".link");
    const data = element.getAttribute("aria-expanded");
    if (data) {
      const iconElement = this.elRef.nativeElement.getElementById(
        "icon" + pannelId
      );
    }
  }

  onRowClick(clientItem: any) {
    console.log(clientItem);
    sessionStorage.setItem("clientName", clientItem.name);
    this.myservice.navigateToClientPortfolio(clientItem);
  }

  sortNumber(className) {
    switch (className) {
      case 'shortClassCNG':
        this.shortClassCNG === 'headerSortUp' ? (this.shortClassCNG = 'headerSortDown', this.clientholdingdetails.sort((a, b) => Number(b.changeVal) - Number(a.changeVal))) : (this.shortClassCNG = 'headerSortUp', this.clientholdingdetails.sort((a, b) => Number(a.changeVal) - Number(b.changeVal)))
        this.shortClassName = '';
        this.shortClassPSentiment = '';
        this.shortClassAUM = '';
        this.shortClassTotal = '';
        this.shortClassNSentiment = '';
        break;

      case 'shortClassAUM':
        this.shortClassAUM === 'headerSortUp' ? (this.shortClassAUM = 'headerSortDown', this.clientholdingdetails.sort((a, b) => Number(b.marketValue.replace(/,/g, '')) - Number(a.marketValue.replace(/,/g, '')))) : (this.shortClassAUM = 'headerSortUp', this.clientholdingdetails.sort((a, b) => Number(a.marketValue.replace(/,/g, '')) - Number(b.marketValue.replace(/,/g, ''))))
        this.shortClassName = '';
        this.shortClassCNG = '';
        this.shortClassPSentiment = '';
        this.shortClassTotal = '';
        this.shortClassNSentiment = '';
        break;

      case 'shortClassTotal':
        this.shortClassTotal === 'headerSortUp' ? (this.shortClassTotal = 'headerSortDown', this.clientholdingdetails.sort((a, b) => Number(b.ofOverall) - Number(a.ofOverall))) : (this.shortClassTotal = 'headerSortUp', this.clientholdingdetails.sort((a, b) => Number(a.ofOverall) - Number(b.ofOverall)))
        this.shortClassName = '';
        this.shortClassCNG = '';
        this.shortClassPSentiment = '';
        this.shortClassAUM = '';
        this.shortClassNSentiment = '';
        break;

      case 'shortClassPSentiment':
        this.shortClassPSentiment === 'headerSortUp' ? (this.shortClassPSentiment = 'headerSortDown', this.clientholdingdetails.sort((a, b) => Number(b.posSentScore) - Number(a.posSentScore))) : (this.shortClassPSentiment = 'headerSortUp', this.clientholdingdetails.sort((a, b) => Number(a.posSentScore) - Number(b.posSentScore)))
        this.shortClassName = '';
        this.shortClassCNG = '';
        this.shortClassAUM = '';
        this.shortClassTotal = '';
        this.shortClassNSentiment = '';
        break;

      case 'shortClassNSentiment':
        this.shortClassNSentiment === 'headerSortUp' ? (this.shortClassNSentiment = 'headerSortDown', this.clientholdingdetails.sort((a, b) => Number(b.negSentScore) - Number(a.negSentScore))) : (this.shortClassNSentiment = 'headerSortUp', this.clientholdingdetails.sort((a, b) => Number(a.negSentScore) - Number(b.negSentScore)))
        this.shortClassName = '';
        this.shortClassCNG = '';
        this.shortClassAUM = '';
        this.shortClassTotal = '';
        this.shortClassPSentiment = '';
        break;

      case 'shortClassName':
        this.shortClassName === 'headerSortUp' ? (this.shortClassName = 'headerSortDown', this.clientholdingdetails.sort((a, b) => b.name.localeCompare(a.name))) : (this.shortClassName = 'headerSortUp', this.clientholdingdetails.sort((a, b) => a.name.localeCompare(b.name)))
        this.shortClassCNG = '';
        this.shortClassPSentiment = '';
        this.shortClassAUM = '';
        this.shortClassTotal = '';
        this.shortClassNSentiment = '';
        break;

        case 'shortClientName':
        this.shortClientName === 'headerSortUp' ? (this.shortClientName = 'headerSortDown', this.clientDataList.sort((a, b) => b.name.localeCompare(a.name))) : (this.shortClientName = 'headerSortUp', this.clientDataList.sort((a, b) => a.name.localeCompare(b.name)))
        break;

        case 'shortClientPct':
        this.shortClientPct === 'headerSortUp' ? (this.shortClientPct = 'headerSortDown', this.clientDataList.sort((a, b) => Number(b.pct_change) - Number(a.pct_change))) : (this.shortClientPct = 'headerSortUp', this.clientDataList.sort((a, b) => Number(a.pct_change) - Number(b.pct_change)))
        break;

      default:
        break;
    }

  }


  expandDetails(type) {
    if (type === 'expand') {
      this.expandAll = true;
    } else {
      this.expandAll = false;
      const dataElement = this.elRef.nativeElement.querySelectorAll(".panel-collapse");
      for (var i = 0; i < dataElement.length; i++) {
        dataElement[i].classList.remove('show');
      }
    }
  }
  open(content, tableRow, selectedItem) {
    this.insightdetails;
    this.clientDataList = [];
    this.modalRow = selectedItem;
    this.clientDetails = tableRow;
    this.clientDataList = tableRow.client_list.sort((a, b) => Number(b.pct_change) - Number(a.pct_change));
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'md', centered: true });
  }

  public isNumber(n) { 
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
  } 
}
