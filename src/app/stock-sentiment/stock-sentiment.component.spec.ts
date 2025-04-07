import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockSentimentComponent } from './stock-sentiment.component';
import { StockSentimentService } from '../stock-sentiment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
 
describe('StockSentimentComponent', () => {
  let component: StockSentimentComponent;
  let fixture: ComponentFixture<StockSentimentComponent>;
  let mockService: jasmine.SpyObj<StockSentimentService>;
 
  beforeEach(async () => {
    mockService = jasmine.createSpyObj('StockSentimentService', [
      'getAllTickers',
      'getStockSentiment',
      'getMarketSentiment'
    ]);
 
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StockSentimentComponent],
      providers: [{ provide: StockSentimentService, useValue: mockService }]
    }).compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(StockSentimentComponent);
    component = fixture.componentInstance;
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should fetch tickers on init', () => {
    const mockTickers = ['AAPL', 'MSFT', 'GOOGL'];
    mockService.getAllTickers.and.returnValue(of(mockTickers));
 
    component.ngOnInit();
 
    expect(component.tickers).toEqual(mockTickers);
    expect(component.selectedTicker).toBe('AAPL');
  });
 
  it('should fetch stock sentiment when ticker is selected', () => {
    const mockSentiment = { sentiment: 'Positive' };
    mockService.getStockSentiment.and.returnValue(of(mockSentiment));
 
    component.selectedTicker = 'AAPL';
    component.getStockSentiment();
 
    expect(component.stockSentiment).toEqual(mockSentiment);
  });
 
  it('should fetch market sentiment on init', () => {
    const mockMarketSentiment = { positive: 60, negative: 20, neutral: 20, overall_sentiment: 'Positive' };
    mockService.getMarketSentiment.and.returnValue(of(mockMarketSentiment));
 
    component.ngOnInit();
 
  });
});