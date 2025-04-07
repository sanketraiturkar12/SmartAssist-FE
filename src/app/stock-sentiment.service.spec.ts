import { TestBed } from '@angular/core/testing';

import { StockSentimentService } from './stock-sentiment.service';

describe('StockSentimentService', () => {
  let service: StockSentimentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSentimentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
