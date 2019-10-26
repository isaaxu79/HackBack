import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIndividualPage } from './vista-individual.page';

describe('VistaIndividualPage', () => {
  let component: VistaIndividualPage;
  let fixture: ComponentFixture<VistaIndividualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaIndividualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaIndividualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
