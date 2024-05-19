import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt07AnimalsComponent } from './bt07-animals.component';

describe('Bt07AnimalsComponent', () => {
  let component: Bt07AnimalsComponent;
  let fixture: ComponentFixture<Bt07AnimalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bt07AnimalsComponent]
    });
    fixture = TestBed.createComponent(Bt07AnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
