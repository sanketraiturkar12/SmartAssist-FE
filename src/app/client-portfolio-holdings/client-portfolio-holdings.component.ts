import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-client-portfolio-holdings',
  templateUrl: './client-portfolio-holdings.component.html',
  styleUrls: ['./client-portfolio-holdings.component.css']
})
export class ClientPortfolioHoldingsComponent implements OnInit {
  @Input() data: any;
  @Input() clientName;
  shortClassTicker = '';
  shortClassChange = '';
  shortClassQuantity = '';
  shortClassLastPrice = '';
  shortClassMarketValue = '';
  shortClassAUMPrice = '';
  shortClassNSentiment ='';

  shortClassSentiment = 'headerSortUp';
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(change: SimpleChanges) {
    if (this.data) {
      // this.shortClassSentiment === 'headerSortUp' ? (this.shortClassSentiment = 'headerSortDown', this.data.sort((a, b) => Number(a.Sentiment_score) - Number(b.Sentiment_score))) : (this.shortClassSentiment = 'headerSortUp', this.data.sort((a, b) => Number(b.Sentiment_score) - Number(a.Sentiment_score)));
    }
  }


  sortNumber(className) {
    switch (className) {
      case 'shortClassChange':
        this.shortClassChange === 'headerSortUp' ? (this.shortClassChange = 'headerSortDown', this.data.sort((a, b) => Number(b.priceChangePct) - Number(a.priceChangePct))) : (this.shortClassChange = 'headerSortUp', this.data.sort((a, b) => Number(a.priceChangePct) - Number(b.priceChangePct)))
        this.shortClassTicker = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassSentiment = '';
        this.shortClassAUMPrice = '';
        this.shortClassNSentiment = '';
        break;

      case 'shortClassLastPrice':
        this.shortClassLastPrice === 'headerSortUp' ? (this.shortClassLastPrice = 'headerSortDown', this.data.sort((a, b) => Number(b.lastPrice.replace(/,/g, '')) - Number(a.lastPrice.replace(/,/g, '')))) : (this.shortClassLastPrice = 'headerSortUp', this.data.sort((a, b) => Number(a.lastPrice.replace(/,/g, '')) - Number(b.lastPrice.replace(/,/g, ''))))
        this.shortClassTicker = '';
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassMarketValue = '';
        this.shortClassSentiment = '';
        this.shortClassAUMPrice = '';
        this.shortClassNSentiment = '';

        break;

      case 'shortClassMarketValue':
        this.shortClassMarketValue === 'headerSortUp' ? (this.shortClassMarketValue = 'headerSortDown', this.data.sort((a, b) => Number(b.marketValue.replace(/,/g, '')) - Number(a.marketValue.replace(/,/g, '')))) : (this.shortClassMarketValue = 'headerSortUp', this.data.sort((a, b) => Number(a.marketValue.replace(/,/g, '')) - Number(b.marketValue.replace(/,/g, ''))))
        this.shortClassTicker = '';
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassSentiment = '';
        this.shortClassAUMPrice = '';

        break;

      case 'shortClassQuantity':
        this.shortClassQuantity === 'headerSortUp' ? (this.shortClassQuantity = 'headerSortDown', this.data.sort((a, b) => Number(b.quantity) - Number(a.quantity))) : (this.shortClassQuantity = 'headerSortUp', this.data.sort((a, b) => Number(a.quantity) - Number(b.quantity)))
        this.shortClassTicker = '';
        this.shortClassChange = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassSentiment = '';
        this.shortClassAUMPrice = '';
        this.shortClassNSentiment = '';

        break;

      case 'shortClassTicker':
        this.shortClassTicker === 'headerSortUp' ? (this.shortClassTicker = 'headerSortDown', this.data.sort((a, b) => b.ticker.localeCompare(a.ticker))) : (this.shortClassTicker = 'headerSortUp', this.data.sort((a, b) => a.ticker.localeCompare(b.ticker)))
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassSentiment = '';
        this.shortClassAUMPrice = '';
        this.shortClassNSentiment = '';

        break;

      case 'shortClassSentiment':
        this.shortClassSentiment === 'headerSortUp' ? (this.shortClassSentiment = 'headerSortDown', this.data.sort((a, b) => Number(b.Sentiment_score) - Number(a.Sentiment_score))) : (this.shortClassSentiment = 'headerSortUp', this.data.sort((a, b) => Number(a.Sentiment_score) - Number(b.Sentiment_score)))
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassTicker = '';
        this.shortClassAUMPrice = '';
        this.shortClassNSentiment = '';
        break;
      case 'shortClassAUMPrice':
        this.shortClassAUMPrice === 'headerSortUp' ? (this.shortClassAUMPrice = 'headerSortDown', this.data.sort((a, b) => Number(b.AumPct) - Number(a.AumPct))) : (this.shortClassAUMPrice = 'headerSortUp', this.data.sort((a, b) => Number(a.AumPct) - Number(b.AumPct)))
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassTicker = '';
        this.shortClassSentiment = '';
        this.shortClassNSentiment = '';
        break;
        case 'shortClassNSentiment':
        this.shortClassNSentiment === 'headerSortUp' ? (this.shortClassNSentiment = 'headerSortDown', this.data.sort((a, b) => Number(b.esg_score) - Number(a.esg_score))) : (this.shortClassNSentiment = 'headerSortUp', this.data.sort((a, b) => Number(a.esg_score) - Number(b.esg_score)))
        this.shortClassChange = '';
        this.shortClassQuantity = '';
        this.shortClassLastPrice = '';
        this.shortClassMarketValue = '';
        this.shortClassTicker = '';
        this.shortClassSentiment = '';
        this.shortClassAUMPrice = '';
        break;
      default:
        break;
    }

  }

}
