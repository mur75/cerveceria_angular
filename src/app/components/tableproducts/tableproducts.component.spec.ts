import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableproductsComponent } from './tableproducts.component';

describe('TableproductsComponent', () => {
  let component: TableproductsComponent;
  let fixture: ComponentFixture<TableproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
