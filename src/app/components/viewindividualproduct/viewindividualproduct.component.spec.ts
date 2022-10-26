import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewindividualproductComponent } from './viewindividualproduct.component';

describe('ViewindividualproductComponent', () => {
  let component: ViewindividualproductComponent;
  let fixture: ComponentFixture<ViewindividualproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewindividualproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewindividualproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
