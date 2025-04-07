import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientholdingComponent } from './clientholding.component';

describe('ClientholdingComponent', () => {
  let component: ClientholdingComponent;
  let fixture: ComponentFixture<ClientholdingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientholdingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientholdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
