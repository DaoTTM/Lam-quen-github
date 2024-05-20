import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt01MyNameComponent } from './bt01-my-name.component';

describe('Bt01MyNameComponent', () => {
  let component: Bt01MyNameComponent;
  let fixture: ComponentFixture<Bt01MyNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt01MyNameComponent]
    });
    fixture = TestBed.createComponent(Bt01MyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
