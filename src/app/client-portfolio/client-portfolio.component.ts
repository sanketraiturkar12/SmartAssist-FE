import { Component, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { DataserviceService } from "../dataservice.service";

@Component({
  selector: "app-client-portfolio",
  templateUrl: "./client-portfolio.component.html",
  styleUrls: ["./client-portfolio.component.css"],
})
export class ClientPortfolioComponent implements OnInit, OnChanges {
  public notificationCountChanged: number = 0;
  clientID;
  client: any;
  portfolioSentimentScore: number | null = null; // Portfolio Sentiment Score;
  riskProfileDatails;
  clientHoldingDetails;
  clientInsights;
  clientName;
  showDoughnut: boolean;

  constructor(private dataService: DataserviceService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    this.dataService.castValue.subscribe((value)=> this.showDoughnut = value)

  }

  ngOnInit() {
    this.dataService.castValue.subscribe((value)=> this.showDoughnut = value)
    this.client = window.history.state;
    this.clientName = this.client.name && this.client.name.split(' ')[0] && this.client.name.split(' ')[0].toUpperCase()+ "'S";
    // this.route.data.subscribe(dat=>{
    //   console.log(dat)
    // })
    // this.fetchSentimentScore(this.client.clientID);
    this.fetchPortfolioSentimentScore(this.client.clientID);

    this.fetchStockHoldingsData(1, this.client.clientID);
    this.fetchInsights(1, this.client.clientID);
  }

  // fetchSentimentScore(clientID: number) {
  //   this.dataService
  //     .getportfolioScore(clientID)
  //     .subscribe((data) => {
  //       console.log('API Response:', data);
  //       this.portfolioSentimentScore = data["data"];
  //       if (this.portfolioSentimentScore["symbol"] === "up-arrow") {
  //         this.portfolioSentimentScore["mysymbol"] = true;
  //       } else {
  //         this.portfolioSentimentScore["mysymbol"] = false;
  //       }
  //     });
  // }

  fetchPortfolioSentimentScore(clientID: number): void {
    this.dataService.getportfolioScore(clientID).subscribe(
      (response) => {
        console.log('Portfolio Sentiment Score Response:', response);
        this.portfolioSentimentScore = response.portfolio_sentiment_score; // Assign the score
      },
      (error) => {
        console.error('Error fetching portfolio sentiment score:', error);
        this.portfolioSentimentScore = null; // Handle error
      }
    );
  }

  fetchStockHoldingsData(faid, clientID) {
    console.log("******clientID",clientID);
    this.dataService
      .getStockHoldingsByClient(faid, clientID, 'Sentiment_score', 'asc')
      .subscribe((response) => {
        console.log("******stockHoldings",response);
        if (response && response["data"]) {
          this.clientHoldingDetails = response["data"];
          this.riskProfileDatails = response["data"][0];
        }
      });
  }

  fetchInsights(faid, clientID){
    this.dataService.getInsightsByClient(faid,clientID).subscribe(response =>{
      this.clientInsights = response['data']
    })
  }

  clearFilter(){
    this.dataService.sendValue(false);
    this.dataService.castValue.subscribe((value)=> this.showDoughnut = value)

  }

  public countChanged(e) {
    if(e) {
    this.notificationCountChanged = e;
    }
  }
}
