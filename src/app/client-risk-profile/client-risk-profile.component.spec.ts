import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRiskProfileComponent } from './client-risk-profile.component';

describe('ClientRiskProfileComponent', () => {
  let component: ClientRiskProfileComponent;
  let fixture: ComponentFixture<ClientRiskProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRiskProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRiskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
