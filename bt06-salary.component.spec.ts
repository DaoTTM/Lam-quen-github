import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt06SalaryComponent } from './bt06-salary.component';

describe('Bt06SalaryComponent', () => {
  let component: Bt06SalaryComponent;
  let fixture: ComponentFixture<Bt06SalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt06SalaryComponent]
    });
    fixture = TestBed.createComponent(Bt06SalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
