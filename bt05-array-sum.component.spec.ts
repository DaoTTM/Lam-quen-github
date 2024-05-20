import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt05ArraySumComponent } from './bt05-array-sum.component';

describe('Bt05ArraySumComponent', () => {
  let component: Bt05ArraySumComponent;
  let fixture: ComponentFixture<Bt05ArraySumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt05ArraySumComponent]
    });
    fixture = TestBed.createComponent(Bt05ArraySumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
