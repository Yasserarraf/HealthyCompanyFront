import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpsyComponent } from './testpsy.component';

describe('TestpsyComponent', () => {
  let component: TestpsyComponent;
  let fixture: ComponentFixture<TestpsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
