import { Component, OnInit } from '@angular/core';
import { StockSentimentService } from '../stock-sentiment.service';

@Component({
  selector: 'app-market-sentiment',
  templateUrl: './market-sentiment.component.html',
  styleUrls: ['./market-sentiment.component.css']
})

export class MarketSentimentComponent implements OnInit {
  marketSentiment: any;
  loading: boolean = false;
  selectedTimeRange: string = '7d'; // Default time range set to '7d'

  constructor(private sentimentService: StockSentimentService) {}

  ngOnInit(): void {
    this.getMarketSentiment(); // Fetch market sentiment on initialization
  }

  // Fetch overall market sentiment based on the selected time range
  getMarketSentiment(): void {
    if (!this.selectedTimeRange) return; // Ensure a time range is selected
    this.loading = true;
    console.log('Calling getMarketSentiment API with time range:', this.selectedTimeRange);
    this.sentimentService.getMarketSentiment(this.selectedTimeRange).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.marketSentiment = {
          overallSentiment: response.overall_sentiment,
          positive: response.positive,
          negative: response.negative,
          neutral: response.neutral
          
        };
        this.loading = false;
      },
      (error) => {
        console.error('API Error:', error);
        this.marketSentiment = { error: 'Unable to fetch market sentiment. Please try again later.' };
        this.loading = false;
      }
    );
  }
}