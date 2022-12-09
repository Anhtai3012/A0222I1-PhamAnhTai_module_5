import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaderComponent } from './calculader.component';

describe('CalculaderComponent', () => {
  let component: CalculaderComponent;
  let fixture: ComponentFixture<CalculaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
