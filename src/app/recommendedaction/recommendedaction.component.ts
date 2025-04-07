import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: "app-recommendedaction",
  templateUrl: "./recommendedaction.component.html",
  styleUrls: ["./recommendedaction.component.css"],
})
export class RecommendedactionComponent implements OnInit {
  dataservice: any;
  loser: any[];
  marketDetails: any[];

  loserdetails: any[];
  losermarketDetails: any[];
  portfolioActionDetails: any[];
  portfolioActionInMarketDetails: any[];
  gainerportfolioDetails: any[];
  gainermarketDetails: any[];
  getRecommAction: any[];
  getRecommActionInMarket: any[];
  shortClassTicker = "";
  shortClassLP = "";
  shortClassChange = "";
  shortClassSentiment = "headerSortUp";
  shortClassAction = "";
  shortClassChangeP = "headerSortUp";
  shortClassChangePSelected = "false";
  shortClassChangeNSelected = "false";
  shortClassChangeN = "headerSortUp";
  shortClassChangePMarket = "headerSortUp";
  shortClassChangePMarketSelected = "false";
  shortClassChangeNMarketSelected = "false";
  shortClassChangeNMarket = "headerSortUp";
  closeResult: string;
  modalRow: any;
  shortClassTickerMkt = "";
  shortClassLPMkt = "";
  shortClassChangeMkt = "";
  shortClassSentimentMkt = "headerSortUp";
  shortClassESGMkt = "";
  shortClassESG = "";
  shortClassActionMkt = "";

  constructor(
    private myservice: DataserviceService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.myservice.getLoser(1, "portfolio").subscribe((data) => {
      this.loserdetails = data["data"];
      this.loserdetails.sort(
        (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
      );
    });

    this.myservice
      .getPortFolioAction("portfolio", 1, "sentiment", "asc")
      .subscribe((data) => {
        this.portfolioActionDetails = data["data"]["finalResult"];
        this.getRecommAction = data["data"]["recommendedActions"];
      });

    this.myservice.getgainerPortfolio(1, "portfolio").subscribe((data) => {
      this.gainerportfolioDetails = data["data"];
      this.gainerportfolioDetails.sort(
        (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
      );
    });

    // this.myservice.getLoser(1, "market").subscribe((data) => {
    //   this.losermarketDetails = data["data"];
    //   this.losermarketDetails.sort((a, b) => Number(a.priceChangePct) - Number(b.priceChangePct));
    // });

    // this.myservice.getPortFolioAction("market", 1, 'sentiment', 'asc').subscribe((data) => {
    //   this.portfolioActionInMarketDetails = data["data"]["finalResult"];
    //   this.getRecommActionInMarket = data["data"]["recommendedActions"];
    // });

    //  this.myservice.getgainerPortfolio(1, "market").subscribe((data) => {
    //   this.gainermarketDetails = data["data"];
    //   this.gainermarketDetails.sort((a, b) => Number(b.priceChangePct) - Number(a.priceChangePct));
    // });
  }

  onBearish($event) {
    this.myservice
      .getPortFolioAction("market", 1, "sentiment", "asc")
      .subscribe((data) => {
        this.portfolioActionInMarketDetails = data["data"]["finalResult"];
        this.getRecommActionInMarket = data["data"]["recommendedActions"];
      });

    var col = document.querySelector("#recaction #ghi2");
    col.classList.add("anotselected");
    col = document.querySelector("#recaction #ghi1");
    col.classList.remove("anotselected");
  }

  onBullish($event) {
    var col = document.querySelector("#recaction #ghi1");
    col.classList.add("anotselected");
    col = document.querySelector("#recaction #ghi2");
    col.classList.remove("anotselected");
  }

  onPort($event) {
    // alert("Bearish")
    var col = document.querySelector("#recaction1 #ghi4");
    col.classList.add("anotselected");
    col = document.querySelector("#recaction1 #ghi3");
    col.classList.remove("anotselected");
  }

  onMarket($event) {
    this.myservice.getgainerPortfolio(1, "market").subscribe((data) => {
      this.gainermarketDetails = data["data"];
      this.gainermarketDetails.sort(
        (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
      );
    });
    var col = document.querySelector("#recaction1 #ghi3");
    col.classList.add("anotselected");
    col = document.querySelector("#recaction1 #ghi4");
    col.classList.remove("anotselected");
  }

  onPortfolio($event) {
    // alert("Bearish")
    var col = document.querySelector("#recactionssss #ghi6");
    col.classList.add("anotselected");
    col = document.querySelector("#recactionssss #ghi5");
    col.classList.remove("anotselected");
  }

  onInmarket($event) {
    this.myservice.getLoser(1, "market").subscribe((data) => {
      this.losermarketDetails = data["data"];
      this.losermarketDetails.sort(
        (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
      );
    });
    var col = document.querySelector("#recactionssss #ghi5");
    col.classList.add("anotselected");
    col = document.querySelector("#recactionssss #ghi6");
    col.classList.remove("anotselected");
  }

  shortTicker() {
    if (this.shortClassTicker === "headerSortUp") {
      this.shortClassTicker = "headerSortDown";
      this.portfolioActionInMarketDetails.sort((a, b) =>
        b.ticker.localeCompare(a.ticker)
      );
    } else {
      this.shortClassTicker = "headerSortUp";
      this.portfolioActionInMarketDetails.sort((a, b) =>
        a.ticker.localeCompare(b.ticker)
      );
    }
  }

  sortNumberChange(className) {
    switch (className) {
      case "shortClassChangeP":
        this.shortClassChangePSelected = "true";
        this.shortClassChangeP === "headerSortUp"
          ? ((this.shortClassChangeP = "headerSortDown"),
            this.gainerportfolioDetails.sort(
              (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
            ))
          : ((this.shortClassChangeP = "headerSortUp"),
            this.gainerportfolioDetails.sort(
              (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
            ));
        break;

      case "shortClassChangeN":
        this.shortClassChangeNSelected = "true";
        this.shortClassChangeN === "headerSortUp"
          ? ((this.shortClassChangeN = "headerSortDown"),
            this.loserdetails.sort(
              (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
            ))
          : ((this.shortClassChangeN = "headerSortUp"),
            this.loserdetails.sort(
              (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
            ));
        break;

      case "shortClassChangePMarket":
        this.shortClassChangePMarketSelected = "true";
        this.shortClassChangePMarket === "headerSortUp"
          ? ((this.shortClassChangePMarket = "headerSortDown"),
            this.gainermarketDetails.sort(
              (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
            ))
          : ((this.shortClassChangePMarket = "headerSortUp"),
            this.gainermarketDetails.sort(
              (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
            ));
        break;

      case "shortClassChangeNMarket":
        this.shortClassChangeNMarketSelected = "true";
        this.shortClassChangeNMarket === "headerSortUp"
          ? ((this.shortClassChangeNMarket = "headerSortDown"),
            this.losermarketDetails.sort(
              (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
            ))
          : ((this.shortClassChangeNMarket = "headerSortUp"),
            this.losermarketDetails.sort(
              (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
            ));
        break;

      default:
        break;
    }
  }

  sortNumber(className) {
    switch (className) {
      case "shortClassTicker":
        this.shortClassTicker === "headerSortUp"
          ? ((this.shortClassTicker = "headerSortDown"),
            this.portfolioActionDetails.sort((a, b) =>
              b.ticker.localeCompare(a.ticker)
            ))
          : ((this.shortClassTicker = "headerSortUp"),
            this.portfolioActionDetails.sort((a, b) =>
              a.ticker.localeCompare(b.ticker)
            ));
        this.shortClassLP = "";
        this.shortClassChange = "";
        this.shortClassSentiment = "";
        this.shortClassAction = "";
        this.shortClassESG = "";
        break;
      case "shortClassLP":
        this.shortClassLP === "headerSortUp"
          ? ((this.shortClassLP = "headerSortDown"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(b.LastPrice) - Number(a.LastPrice)
            ))
          : ((this.shortClassLP = "headerSortUp"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(a.LastPrice) - Number(b.LastPrice)
            ));




        this.shortClassTicker = "";
        this.shortClassChange = "";
        this.shortClassSentiment = "";
        this.shortClassAction = "";
        this.shortClassESG = "";
        break;
      case "shortClassChange":
        this.shortClassChange === "headerSortUp"
          ? ((this.shortClassChange = "headerSortDown"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
            ))
          : ((this.shortClassChange = "headerSortUp"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
            ));
        this.shortClassLP = "";
        this.shortClassSentiment = "";
        this.shortClassAction = "";
        this.shortClassTicker = "";
        this.shortClassESG = "";
        break;
      case "shortClassSentiment":
        this.shortClassSentiment === "headerSortUp"
          ? ((this.shortClassSentiment = "headerSortDown"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(b.Sentiment_score) - Number(a.Sentiment_score)
            ))
          : ((this.shortClassSentiment = "headerSortUp"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(a.Sentiment_score) - Number(b.Sentiment_score)
            ));
        this.shortClassLP = "";
        this.shortClassChange = "";
        this.shortClassAction = "";
        this.shortClassTicker = "";
        this.shortClassESG = "";
        break;
        case "shortClassESG":
        this.shortClassESG === "headerSortUp"
          ? ((this.shortClassESG = "headerSortDown"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(b.esg_score) - Number(a.esg_score)
            ))
          : ((this.shortClassESG = "headerSortUp"),
            this.portfolioActionDetails.sort(
              (a, b) => Number(a.esg_score) - Number(b.esg_score)
            ));
        this.shortClassLP = "";
        this.shortClassChange = "";
        this.shortClassAction = "";
        this.shortClassTicker = "";
        this.shortClassSentiment = "";
        break;

      default:
        break;
    }
  }
  sortNumberMkt(className) {
    switch (className) {
      case "ticker":
        this.shortClassTickerMkt === "headerSortUp"
          ? ((this.shortClassTickerMkt = "headerSortDown"),
            this.portfolioActionInMarketDetails.sort((a, b) =>
              b.ticker.localeCompare(a.ticker)
            ))
          : ((this.shortClassTickerMkt = "headerSortUp"),
            this.portfolioActionInMarketDetails.sort((a, b) =>
              a.ticker.localeCompare(b.ticker)
            ));
        this.shortClassLPMkt = "";
        this.shortClassChangeMkt = "";
        this.shortClassSentimentMkt = "";
        this.shortClassActionMkt = "";
        this.shortClassESGMkt = "";
        break;
      case "lastPrice":
        this.shortClassLPMkt === "headerSortUp"
          ? ((this.shortClassLPMkt = "headerSortDown"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(b.LastPrice) - Number(a.LastPrice)
            ))
          : ((this.shortClassLPMkt = "headerSortUp"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(a.LastPrice) - Number(b.LastPrice)
            ));
        this.shortClassTickerMkt = "";
        this.shortClassChangeMkt = "";
        this.shortClassSentimentMkt = "";
        this.shortClassActionMkt = "";
        this.shortClassESGMkt = "";
        break;
      case "changePercent":
        this.shortClassChangeMkt === "headerSortUp"
          ? ((this.shortClassChangeMkt = "headerSortDown"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(b.priceChangePct) - Number(a.priceChangePct)
            ))
          : ((this.shortClassChangeMkt = "headerSortUp"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)
            ));
        this.shortClassLPMkt = "";
        this.shortClassSentimentMkt = "";
        this.shortClassActionMkt = "";
        this.shortClassTickerMkt = "";
        this.shortClassESGMkt = "";
        break;
      case "esg":
        this.shortClassESGMkt === "headerSortUp"
          ? ((this.shortClassESGMkt = "headerSortDown"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(b.esg_score) - Number(a.esg_score)
            ))
          : ((this.shortClassESGMkt = "headerSortUp"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(a.esg_score) - Number(b.esg_score)
            ));
        this.shortClassLPMkt = "";
        this.shortClassChangeMkt = "";
        this.shortClassActionMkt = "";
        this.shortClassTickerMkt = "";
        this.shortClassSentimentMkt = "";
        break;
        case "sentiment":
        this.shortClassSentimentMkt === "headerSortUp"
          ? ((this.shortClassSentimentMkt = "headerSortDown"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(b.Sentiment_score) - Number(a.Sentiment_score)
            ))
          : ((this.shortClassSentimentMkt = "headerSortUp"),
            this.portfolioActionInMarketDetails.sort(
              (a, b) => Number(a.Sentiment_score) - Number(b.Sentiment_score)
            ));
        this.shortClassLPMkt = "";
        this.shortClassChangeMkt = "";
        this.shortClassActionMkt = "";
        this.shortClassTickerMkt = "";
        this.shortClassESGMkt = "";
        break;

      default:
        break;
    }
  }

  open(content, tableRow) {
    this.modalRow = tableRow;
    this.modalService.open(content, {
      ariaLabelledBy: "modal-basic-title",
      size: "md",
      centered: true,
    });
  }
}
