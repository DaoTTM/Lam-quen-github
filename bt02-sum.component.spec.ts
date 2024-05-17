import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt02SumComponent } from './bt02-sum.component';

describe('Bt02SumComponent', () => {
  let component: Bt02SumComponent;
  let fixture: ComponentFixture<Bt02SumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt02SumComponent]
    });
    fixture = TestBed.createComponent(Bt02SumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
