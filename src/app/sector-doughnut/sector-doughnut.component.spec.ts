import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorDoughnutComponent } from './sector-doughnut.component';

describe('SectorDoughnutComponent', () => {
  let component: SectorDoughnutComponent;
  let fixture: ComponentFixture<SectorDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorDoughnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
