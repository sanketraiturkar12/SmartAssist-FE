import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorImpactComponent } from './sector-impact.component';

describe('SectorImpactComponent', () => {
  let component: SectorImpactComponent;
  let fixture: ComponentFixture<SectorImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
