import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySingleTestComponent } from './history-single-test.component';

describe('HistorySingleTestComponent', () => {
  let component: HistorySingleTestComponent;
  let fixture: ComponentFixture<HistorySingleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySingleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySingleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
