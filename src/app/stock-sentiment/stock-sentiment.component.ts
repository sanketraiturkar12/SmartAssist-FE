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

  clearComparisonResponseOnTimeRangeChange(): void {
    this.comparisonChart = ''; // Clear the chart
    this.loading = false; // Reset the loading state
    console.log('Comparison response cleared on time range change'); // Debugging: Log the clearing action
  }

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
        this.stockSentiment = response.sentiment; // Assign sentiment details
        this.stockChart = response.chart; // Assign chart URL
  
        // Parse the sentiment response to extract Recommendation and Details
        if (response.sentiment) {
          const sentimentParts = response.sentiment.split('- **Details:**');
          this.stockSentiment = {
            recommendation: sentimentParts[0]?.replace('- **Recommendation:**', '').trim() || 'No recommendation available',
            details: sentimentParts[1]?.trim() || 'No details available',
          };
        } else {
          this.stockSentiment = {
            recommendation: 'No recommendation available',
            details: 'No details available',
          };
        }
  
        this.loading = false; // Stop loader
      },
      (error) => {
        this.stockSentiment = {
          recommendation: 'Error fetching recommendation',
          details: 'Error fetching details',
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
    this.comparisonChart = ''; // Clear the previous chart
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
    this.comparisonChart = ''; // Clear the chart
    this.selectedTickers = []; // Clear the selected tickers
    this.selectedComparisonTimeRange = ''; // Clear the selected time range
    this.loading = false; // Reset the loading state
    console.log('Comparison response and tickers cleared'); // Debugging: Log the clearing action
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
