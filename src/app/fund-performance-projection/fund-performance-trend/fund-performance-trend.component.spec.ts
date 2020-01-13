import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPerformanceTrendComponent } from './fund-performance-trend.component';

describe('FundPerformanceTrendComponent', () => {
  let component: FundPerformanceTrendComponent;
  let fixture: ComponentFixture<FundPerformanceTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundPerformanceTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundPerformanceTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
