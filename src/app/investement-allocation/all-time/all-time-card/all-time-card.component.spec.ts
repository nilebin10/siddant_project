import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeCardComponent } from './all-time-card.component';

describe('AllTimeCardComponent', () => {
  let component: AllTimeCardComponent;
  let fixture: ComponentFixture<AllTimeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTimeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
