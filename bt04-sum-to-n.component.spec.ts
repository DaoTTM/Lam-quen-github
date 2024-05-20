import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt04SumToNComponent } from './bt04-sum-to-n.component';

describe('Bt04SumToNComponent', () => {
  let component: Bt04SumToNComponent;
  let fixture: ComponentFixture<Bt04SumToNComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt04SumToNComponent]
    });
    fixture = TestBed.createComponent(Bt04SumToNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
