import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from './constant'; // Import the environment constant


@Injectable({
  providedIn: "root",
})
export class DataserviceService {
  private booleanValue = new BehaviorSubject(false);
  castValue = this.booleanValue.asObservable();
  private finaldata = [];
  postId: any;
  errorMessage: any;

  public apiUrlPath = environment.apiUrlPath;

  public apiUrlPath1 = environment.apiUrlPath1;

  public apiurl = `{apiUrlPath}/fac/details`;

  public apitopnav = this.apiUrlPath + "/fac/getPreviousDayMarketData";

  // public apiusername = this.apiUrlPath+"/fac/details";
  public apiusername = this.apiUrlPath + "/fac/getUserDetails";

  public apitumgraph = this.apiUrlPath + "/fac/getTotalAUMGraph";

  public apiporfolioptvntvstock =
    this.apiUrlPath + "/fac/getMktValueAndSentimentsbyStock";

  public apimarketsentibyclient =
    this.apiUrlPath + "/fac/getMktValueAndSentimentsOfStockByClient";

  // public apiportfolioscore = this.apiUrlPath+"/fac/getTotalAUM";
    // public apiportfolioscore = this.apiUrlPath + "/fac/getPortfolioSentScore";
  public apiportfolioscore = this.apiUrlPath1 + "/api/stock_holdings";
  // public apimarketscorecard = this.apiUrlPath+"/fac/getMktSentscore";
  public apimarketscorecard = this.apiUrlPath + "/fac/getMarketSentScore";

  public apiclientholding = this.apiUrlPath + "/fac/getClientHoldings";

  public apiinsight = this.apiUrlPath + "/fac/getInsights";

  public apiloserportfolio = this.apiUrlPath + "/fac/getTopLosers";
  // public apitoplosermarket = this.apiUrlPath+"/fac/getTopLosers";

  public apitopgainerportfolio = this.apiUrlPath + "/fac/getTopGainers";
  public apitopgainermarket = this.apiUrlPath + "/fac/getTopGainers";

  public apinewsdetails = this.apiUrlPath + "/fac/news/getRelatedNews";

  public stockHoldingsUrl = this.apiUrlPath + "/fac/getStockHoldings";
  public apimktValueAndSentimentsFaCli =
    this.apiUrlPath + "/fac/getMktValueAndSentimentsFaCli";
  
  public clientRelatedDoc = this.apiUrlPath+ '/fac/getClientRelatedDocument';
  public clientUpcomingMeeting = this.apiUrlPath+ '/fac/getClientUpcomingMeetings';
  public clientHistory = this.apiUrlPath+ '/fac/getGenesisData';
  public clientEvents = this.apiUrlPath+ '/fac/getClientUpcomingLifeEvents';
  public clientIntels = this.apiUrlPath+ '/fac/getClientIntel';
  constructor(private http: HttpClient, private router: Router) {}

  // public apirecommendedactionbearish = this.apiUrlPath+"/fac/getPortFolioAction";
  public apirecommendedactionbullish =
    this.apiUrlPath + "/fac/getPortFolioAction";
  public apirecommendedactionbearish =
    this.apiUrlPath + "/fac/getPortFolioAction";
  public apiGetPortFolioAction = this.apiUrlPath + "/fac/getPortFolioAction";

  getData(userId): Observable<any> {
    return this.http.post<any>(this.apiurl, { faid: userId });
  }

  getData1(userId): Observable<any> {
    return this.http.post<any>(this.apiurl, { faid: userId });
  }

  getClientholding(faid, filterBy?, filterOrder?) {
    return this.http.post(this.apiclientholding, {
      faid: faid,
      filter: filterBy,
      filter_order: filterOrder
    });
  }

  getLoser(details, toploserfilter): any {
    return this.http.post(this.apiloserportfolio, {
      faid: details,
      filter: toploserfilter,
    });
  }

  //  getLosermarket(details) {
  //    return this.http.post(this.apitoplosermarket,{faid:details})
  //   }

  getgainerPortfolio(gainerportfoliodetails, topgainerfilter): any {
    return this.http.post(this.apitopgainerportfolio, {
      faid: gainerportfoliodetails,
      filter: topgainerfilter,
    });
  }

  // getgainerMarket(gainermarketdetails) {
  //    return this.http.post(this.apitopgainerportfolio,{faid:gainermarketdetails})
  //   }

  inSight(insightdetails) {
    return this.http.post(this.apiinsight, { faid: insightdetails });
  }

  NewsData(newsdetails, ticker, filterBy) {
    return this.http.post(this.apinewsdetails, {
      faid: newsdetails,
      securityid: ticker,
      filter:filterBy
    });
  }

  getuserName(userdetails) {
    return this.http.post(this.apiusername, { faid: userdetails });
  }

  getportfolioScore(clientID: number): Observable<any> {
    return this.http.get(this.apiportfolioscore, {
      params: {
        client_id: clientID.toString(), // Ensure client_id is sent as a string
      },
    });
  }

  getmarketScorecard(marketscorecarddetails) {
    return this.http.post(this.apimarketscorecard, {
      faid: marketscorecarddetails,
    });
  }

  getnavbarTop(topnavbardetails) {
    return this.http.post(this.apitopnav, { faid: topnavbardetails });
  }

  recommendedactionBearish(bearishdetails) {
    return this.http.post(this.apirecommendedactionbearish, {
      faid: bearishdetails,
    });
  }

  recommendedactionBullish(bullishdetails) {
    return this.http.post(this.apirecommendedactionbullish, {
      faid: bullishdetails,
    });
  }

  tumGraph(tumgraphdetails, tumgrapgfilter) {
    return this.http.post(this.apitumgraph, {
      faid: tumgraphdetails,
      filter: tumgrapgfilter,
    });
  }

  getPositveNegative(positivenegativedetails) {
    return this.http.post(this.apiporfolioptvntvstock, {
      faid: positivenegativedetails,
    });
  }

  navigateToClientPortfolio(clientObject) {
    this.router.navigate(["/portfolios"], { state: clientObject });
  }

  getportfolioScoreForClient(faid, clientID) {
    return this.http.post(this.apiportfolioscore, {
      faid: faid,
      clientid: clientID,
    });
  }

  // getportfolioScoreForClient(clientID: number): Observable<any> {
  //   return this.http.get(this.apiportfolioscore, {
  //     params: {
  //       clientid: clientID.toString(), // Ensure clientId is sent as a string
  //     },
  //   });
  // }
  
  getMarketSentimentByClient(sentimentbyclientdetails, sentsecurityid) {
    return this.http.post(this.apimarketsentibyclient, {
      faid: sentimentbyclientdetails,
      securityid: sentsecurityid,
    });
  }

  public getPortFolioAction(filterBy: string, faid: number, filter:string,orderBy:string) {
    return this.http.post(this.apiGetPortFolioAction, {
      filter_by: filterBy,
      faid: faid,
      filter:filter,
      filter_order: orderBy
    });
  }

  getStockHoldingsByClient(faid, clientID, filterBy, filterDirection) {
    return this.http.post(this.stockHoldingsUrl, {
      faid: faid,
      clientid: clientID,
      filter_order: filterDirection,
      filter: filterBy
    });
  }
  
  getInsightsByClient(faid, clientID) {
    return this.http.post(this.apiinsight, { faid: faid, clientid: clientID });
  }

  getAUMGraphDetails(faid, filter, clientID) {
    return this.http.post(this.apitumgraph, {
      faid: faid,
      filter: filter,
      clientid: clientID,
    });
  }

  getMktValueAndSentimentsFaCli(faid, clientID) {
    return this.http.post(this.apimktValueAndSentimentsFaCli, {
      faid: faid,
      clientid: clientID,
    });
  }

  getClientRelatedDoc(faid, clientId) {
    return this.http.post(this.clientRelatedDoc, {
      faid: faid,
      clientid: clientId,
    });
  }

  getClientMeeting(faid, clientId) {
    return this.http.post(this.clientUpcomingMeeting, {
      faid: faid,
      clientid: clientId,
    });
  }

  getClientHistory(faid, clientID) {
    return this.http.post(this.clientHistory, {
      faid: faid,
      clientid: clientID
    });
  }

  getClientEvents(faid, clientId) {
    return this.http.post(this.clientEvents, {
      faid: faid,
      clientid: clientId,
    });
  }

  getClientIntel(faid, clientId) {
    return this.http.post(this.clientIntels, {
      faid: faid,
      clientid: clientId,
    });
  }

  sendValue(newValue) {
    this.booleanValue.next(newValue);
  }
}
