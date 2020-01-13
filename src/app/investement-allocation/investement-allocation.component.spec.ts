import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementAllocationComponent } from './investement-allocation.component';

describe('InvestementAllocationComponent', () => {
  let component: InvestementAllocationComponent;
  let fixture: ComponentFixture<InvestementAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestementAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestementAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
