import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

 
@Injectable({
  providedIn: 'root'
})
export class StockSentimentService {
private apiUrl = 'http://127.0.0.1:5000'; // Flask API Base URL
 
  constructor(private http: HttpClient) {}
 
   // Fetch all stock tickers
   getAllTickers(): Observable<string[]> {
    return this.http.get<{ tickers: string[] }>(`${this.apiUrl}/api/tickers`).pipe(
      map(response => response.tickers)
    );
  }

 
  // // Fetch stock sentiment for a selected ticker
  // getStockSentiment(ticker: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/api/stock_sentiment?symbol=${ticker}`);
  // }

  getStockSentiment(ticker: string, timeRange: string): Observable<any> {
    // Correct API format with query parameters
    return this.http.get<any>(`${this.apiUrl}/api/stock_sentiment?symbol=${ticker}&time_range=${timeRange}`);
  }
 
 
  // Fetch overall market sentiment with an optional time range
  getMarketSentiment(timeRange: string): Observable<any> {
    // Correct API format with query parameters
    return this.http.get<any>(`${this.apiUrl}/api/market_sentiment?time_range=${timeRange}`);
  }

  getStockComparison(tickers: string[], timeRange: string): Observable<{ comparisonChart: string; tickers: string[] }> {
    const url = `${this.apiUrl}/api/stock_comparison`; // POST API endpoint
    const body = { tickers, time_range: timeRange }; // Request body with correct key names
    console.log('Fetching stock comparison with body:', body); // Debugging
    return this.http.post<{ comparison_chart: string; tickers: string[] }>(url, body).pipe(
      map(response => ({
        comparisonChart: response.comparison_chart, // Map the backend response to frontend format
        tickers: response.tickers
      }))
    );
}
}