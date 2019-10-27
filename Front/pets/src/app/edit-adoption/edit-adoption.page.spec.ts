import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdoptionPage } from './edit-adoption.page';

describe('EditAdoptionPage', () => {
  let component: EditAdoptionPage;
  let fixture: ComponentFixture<EditAdoptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdoptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdoptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
