import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdopcionPage } from './crear-adopcion.page';

describe('CrearAdopcionPage', () => {
  let component: CrearAdopcionPage;
  let fixture: ComponentFixture<CrearAdopcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAdopcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAdopcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
