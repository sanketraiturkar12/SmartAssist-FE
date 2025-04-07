import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInsightsComponent } from './client-insights.component';

describe('ClientInsightsComponent', () => {
  let component: ClientInsightsComponent;
  let fixture: ComponentFixture<ClientInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
