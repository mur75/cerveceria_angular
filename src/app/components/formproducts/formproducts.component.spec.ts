import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormproductsComponent } from './formproducts.component';

describe('FormproductsComponent', () => {
  let component: FormproductsComponent;
  let fixture: ComponentFixture<FormproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
