import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioScoreComponent } from './portfolio-score.component';

describe('PortfolioScoreComponent', () => {
  let component: PortfolioScoreComponent;
  let fixture: ComponentFixture<PortfolioScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
