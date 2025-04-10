import { Component, OnInit } from '@angular/core';
import { StockSentimentService } from '../stock-sentiment.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.css']
})

export class StockSentimentComponent implements OnInit {
  tickers: string[] = [];
  selectedTicker: string = '';
  selectedComparisonTimeRange: string = ''; // Selected time range for stock comparison
  selectedTimeRange: string = ''; // Add selectedTimeRange property
  newTicker: string = ''; // For adding new tickers
  selectedTickers: string[] = [];
  stockSentiment: any;
  stockChart: string = '';
  comparisonChart: string = '';
  activeTab: string = 'sentiment';
  loading: boolean = false;

  constructor(private sentimentService: StockSentimentService) {}

  ngOnInit(): void {
    this.getAllTickers();
  }

  getAllTickers(): void {
    this.sentimentService.getAllTickers().subscribe((response) => {
      this.tickers = response;
    });
  }

  // 
  getStockSentiment(): void {
    if (!this.selectedTicker || !this.selectedTimeRange) return; // Ensure both ticker and time range are selected
    this.stockSentiment = null;
    this.loading = true;
  
    this.sentimentService.getStockSentiment(this.selectedTicker, this.selectedTimeRange).subscribe(
      (response) => {
        console.log('Stock Sentiment Response:', response); // Debugging
  
        // Assign chart URL
        this.stockChart = response.chart;
  
        // Parse the sentiment string to extract recommendation and details
        const sentimentParts = response.sentiment.split('- Details:');
        const recommendation = sentimentParts[0]?.replace('- Recommendation:', '').trim() || 'No recommendation available.';
        const details = sentimentParts[1]?.trim() || 'No additional details available.';
  
        this.stockSentiment = {
          recommendation,
          details,
        };
  
        this.loading = false; // Stop loader
      },
      (error) => {
        console.error('Error fetching stock sentiment:', error); // Debugging
  
        // Handle error case with fallback messages
        this.stockSentiment = {
          recommendation: 'Unable to fetch recommendation.',
          details: 'Unable to fetch details.',
        };
  
        this.loading = false; // Stop loader
      }
    );
  }

  addTicker(): void {
    if (this.newTicker && !this.selectedTickers.includes(this.newTicker)) {
      this.selectedTickers.push(this.newTicker);
    }
    this.newTicker = ''; // Reset the dropdown after adding
  }

  getStockComparison(): void {
    console.log('Selected Time Range:', this.selectedComparisonTimeRange); // Debugging
    if (this.selectedTickers.length < 2 || !this.selectedComparisonTimeRange) return; // Ensure at least two tickers and a time range are selected
    console.log('Fetching stock comparison for time range:', this.selectedComparisonTimeRange); // Debugging
    this.comparisonChart = null; // Clear the previous chart
    this.loading = true; // Start the loading indicator
    this.sentimentService.getStockComparison(this.selectedTickers, this.selectedComparisonTimeRange).subscribe(
      (response) => {
        console.log('API Response:', response); // Debugging
        this.comparisonChart = response.comparisonChart; // Assign the chart URL
        this.loading = false; // Stop the loading indicator
      },
      (error) => {
        console.error('Error fetching stock comparison:', error);
        
        this.loading = false; // Stop the loading indicator even on error
      }
    );
  }

  
  clearComparisonResponse(): void {
    this.comparisonChart = null; // Clear the chart
    this.selectedTickers = []; // Clear the selected tickers
    this.selectedComparisonTimeRange = ''; // Clear the selected time range
    this.loading = false; // Reset the loading state
    console.log('Comparison response, tickers, and time range cleared'); // Debugging: Log the clearing action
  }

  onTimeRangeChange(): void {
    console.log('Time range changed:', this.selectedComparisonTimeRange); // Debugging
    // Ensure the button is enabled when a valid time range is selected
    if (this.selectedComparisonTimeRange) {
      this.loading = false; // Reset loading state if necessary
    }
  }

  clearSelection(): void {
    this.selectedTickers = []; // Clear the selected tickers
    this.selectedTimeRange = '';
    this.comparisonChart = ''; // Clear the comparison chart
  }

  removeTicker(index: number): void {
    this.selectedTickers.splice(index, 1); // Remove the ticker at the specified index
  }
}



//   // Fetch overall market sentiment
//   getMarketSentiment(): void {
//     this.sentimentService.getMarketSentiment().subscribe(
//       (response) => {
//         this.marketSentiment = response;
//         this.doughnutChartData = [
//           response.positive,
//           response.negative,
//           response.neutral,
//         ];
//       },
//       (error) => {
//         this.marketSentiment = { error: 'API error' };
//       }
//     );
//   }
