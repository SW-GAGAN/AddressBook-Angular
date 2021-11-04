import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingContactsFormComponent } from './adding-contacts-form.component';

describe('AddingContactsFormComponent', () => {
  let component: AddingContactsFormComponent;
  let fixture: ComponentFixture<AddingContactsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingContactsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
