import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './constant'; // Corrected import path
 
@Injectable({
  providedIn: 'root'
})
export class StockSentimentService {
private apiUrl = environment.apiUrl; // Flask API Base URL
 
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

uploadReport(file: File): Observable<any> {
  const url = `${this.apiUrl}/upload`; // Flask API endpoint for uploading reports
  const formData = new FormData();
  formData.append('file', file); // Append the file to the form data

  return this.http.post<any>(url, formData); // Make the POST request with the file
}

getAnalysisByTicker(ticker: string): Observable<any> {
  const url = `${this.apiUrl}/query_analysis?ticker=${ticker}`; // Flask API endpoint for querying analysis
  return this.http.get<any>(url).pipe(
    map((response) => {
      if (response.results && response.results.length > 0) {
        const result = response.results[0];

        // Clean up the analysis output to remove special characters
        if (result.analysis) {
          if (result.analysis.overallSentiment) {
            result.analysis.overallSentiment = result.analysis.overallSentiment.replace(/[^a-zA-Z0-9.,:;()$% ]/g, '');
          }
          if (result.analysis.quarterlyHighlights) {
            result.analysis.quarterlyHighlights = result.analysis.quarterlyHighlights.map((highlight: string) =>
              highlight.replace(/[^a-zA-Z0-9.,:;()$% ]/g, '')
            );
          }
          if (result.analysis.latestNews) {
            result.analysis.latestNews = result.analysis.latestNews.replace(/[^a-zA-Z0-9.,:;()$% ]/g, '');
          }
          if (result.analysis.finalRecommendation) {
            result.analysis.finalRecommendation = result.analysis.finalRecommendation.replace(/[^a-zA-Z0-9.,:;()$% ]/g, '');
          }
        }

        return result; // Return the cleaned result
      }
      return null; // Return null if no results are found
    })
  );
}
}