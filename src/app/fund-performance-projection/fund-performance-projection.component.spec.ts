import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPerformanceProjectionComponent } from './fund-performance-projection.component';

describe('FundPerformanceProjectionComponent', () => {
  let component: FundPerformanceProjectionComponent;
  let fixture: ComponentFixture<FundPerformanceProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundPerformanceProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundPerformanceProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
