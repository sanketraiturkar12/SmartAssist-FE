import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPortfolioHoldingsComponent } from './client-portfolio-holdings.component';

describe('ClientPortfolioHoldingsComponent', () => {
  let component: ClientPortfolioHoldingsComponent;
  let fixture: ComponentFixture<ClientPortfolioHoldingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPortfolioHoldingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPortfolioHoldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
