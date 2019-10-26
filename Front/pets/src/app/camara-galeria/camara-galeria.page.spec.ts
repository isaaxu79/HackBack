import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraGaleriaPage } from './camara-galeria.page';

describe('CamaraGaleriaPage', () => {
  let component: CamaraGaleriaPage;
  let fixture: ComponentFixture<CamaraGaleriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraGaleriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
