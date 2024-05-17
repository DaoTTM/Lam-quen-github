import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt03EvenCheckComponent } from './bt03-even-check.component';

describe('Bt03EvenCheckComponent', () => {
  let component: Bt03EvenCheckComponent;
  let fixture: ComponentFixture<Bt03EvenCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt03EvenCheckComponent]
    });
    fixture = TestBed.createComponent(Bt03EvenCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
