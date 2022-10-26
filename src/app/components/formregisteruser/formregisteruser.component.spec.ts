import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormregisteruserComponent } from './formregisteruser.component';

describe('FormregisteruserComponent', () => {
  let component: FormregisteruserComponent;
  let fixture: ComponentFixture<FormregisteruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormregisteruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormregisteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//maldito git
