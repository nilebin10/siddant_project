import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureProjectionComponent } from './future-projection.component';

describe('FutureProjectionComponent', () => {
  let component: FutureProjectionComponent;
  let fixture: ComponentFixture<FutureProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
