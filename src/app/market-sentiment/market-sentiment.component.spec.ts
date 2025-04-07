import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSentimentComponent } from './market-sentiment.component';

describe('MarketSentimentComponent', () => {
  let component: MarketSentimentComponent;
  let fixture: ComponentFixture<MarketSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketSentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
