import { Component, OnInit } from '@angular/core';
import { StockSentimentService } from '../stock-sentiment.service';

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
  activeTab: string = 'sentiment'; // Default tab
  loading: boolean = false;

  // For Report Analysis
  selectedFile: File | null = null; // Store the selected file
  selectedFileName: string = ''; // Store the selected file name
  uploadedReport: {
    companyName: string;
    ticker: string;
    analysis: {
      overallSentiment: string;
      quarterlyHighlights: string[];
      latestNews: string;
      finalRecommendation: string;
    };
  } | null = null;

  // Store the uploaded report data
  constructor(private sentimentService: StockSentimentService) {}

  ngOnInit(): void {
    this.getAllTickers();
  }

  getAllTickers(): void {
    this.sentimentService.getAllTickers().subscribe((response) => {
      this.tickers = response;
    });
  }

  getStockSentiment(): void {
    if (!this.selectedTicker || !this.selectedTimeRange) return; // Ensure both ticker and time range are selected
    this.stockSentiment = null;
    this.uploadedReport = null; // Clear previous analysis results
    this.loading = true;
  
    // Fetch stock sentiment
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
  
        // Fetch analysis results for the selected ticker
        this.sentimentService.getAnalysisByTicker(this.selectedTicker).subscribe(
          (analysisResponse) => {
            console.log('Analysis Response:', analysisResponse); // Debugging
  
            if (analysisResponse) {
              // Process the response to segregate the analysis
              const output = analysisResponse.analysis.output.replace(/\n/g, ' ').replace(/- /g, ''); // Remove \n and - from the response
  
              this.uploadedReport = {
                companyName: analysisResponse.company_name,
                ticker: analysisResponse.ticker,
                analysis: {
                  overallSentiment: output.match(/1\. Overall sentiment: (.+?) 2\./)?.[1] || 'N/A',
                  quarterlyHighlights: output
                    .match(/2\. Quarterly report highlights for .+?: (.+?) 3\./)?.[1]
                    .split('. ')
                    .map((line) => line.trim())
                    .filter((line) => line) || [],
                    latestNews: output.match(/3\. Latest news summary and sentiment: (.+?) 4\./)?.[1] || 'N/A', // Updated regex
                    finalRecommendation: output.match(/4\. Final recommendation: (.+)/)?.[1] || 'N/A',
                },
              };
            } else {
              this.uploadedReport = {
                companyName: this.selectedTicker,
                ticker: this.selectedTicker,
                analysis: {
                  overallSentiment: 'N/A',
                  quarterlyHighlights: [],
                  latestNews: 'No Latest News Available',
                  finalRecommendation: 'N/A',
                },
              }; // Default empty analysis
            }
  
            this.loading = false; // Stop loader
          },
          (error) => {
            console.error('Error fetching analysis results:', error); // Debugging
            this.uploadedReport = null; // Clear analysis results on error
            this.loading = false; // Stop loader
          }
        );
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

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  
    // Clear responses for the current tab
    if (tab === 'sentiment') {
      this.clearSentimentResponse();
    } else if (tab === 'comparison') {
      this.clearComparisonResponse();
    } else if (tab === 'report') {
      this.clearReport();
    }
  }

  clearSentimentResponse(): void {
    this.stockSentiment = null; // Clear stock sentiment
    this.stockChart = ''; // Clear stock chart
    this.selectedTicker = ''; // Clear selected ticker
    this.selectedTimeRange = ''; // Clear selected time range
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

  clearReport(): void {
    this.uploadedReport = null; // Clear the uploaded report
    this.selectedFile = null; // Clear the selected file
    this.selectedFileName = ''; // Clear the file name
    console.log('Report analysis cleared'); // Debugging: Log the clearing action
  }
  

  removeTicker(index: number): void {
    this.selectedTickers.splice(index, 1); // Remove the ticker at the specified index
  }

   // Handle file selection
   onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]; // Store the selected file
      this.selectedFileName = this.selectedFile.name; // Update the file name
    } else {
      this.selectedFileName = ''; // Clear the file name if no file is selected
    }
  }

  
  // Submit the file and call the upload API
  submitFile(): void {
    if (!this.selectedFile) return;
  
    this.loading = true; // Show loader
    this.sentimentService.uploadReport(this.selectedFile).subscribe(
      (response) => {
        console.log('Upload Report Response:', response); // Debugging
  
        // Process the response to segregate the analysis
        const output = response.analysis.output.replace(/\n/g, ' ').replace(/- /g, ''); // Remove \n and - from the response
  
        this.uploadedReport = {
          companyName: response.company_name,
          ticker: response.ticker,
          analysis: {
            overallSentiment: output.match(/1\. Overall sentiment: (.+?) 2\./)?.[1] || 'N/A',
            quarterlyHighlights: output
              .match(/2\. Quarterly report highlights for .+?: (.+?) 3\./)?.[1]
              .split('. ')
              .map((line) => line.trim())
              .filter((line) => line) || [],
              latestNews: output.match(/3\. Latest news summary and sentiment: (.+?) 4\./)?.[1] || 'N/A', // Updated regex
              finalRecommendation: output.match(/4\. Final recommendation: (.+)/)?.[1] || 'N/A',
          },
        };
  
        this.loading = false; // Stop the loader
      },
      (error) => {
        console.error('Error uploading report:', error); // Debugging
        this.loading = false; // Stop the loader
        alert('Failed to upload the report. Please try again.');
      }
    );
  }
}