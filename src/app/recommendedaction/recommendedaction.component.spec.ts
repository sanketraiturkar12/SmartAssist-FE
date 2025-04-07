import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedactionComponent } from './recommendedaction.component';

describe('RecommendedactionComponent', () => {
  let component: RecommendedactionComponent;
  let fixture: ComponentFixture<RecommendedactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
