import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedFavoritoPage } from './feed-favorito.page';

describe('FeedFavoritoPage', () => {
  let component: FeedFavoritoPage;
  let fixture: ComponentFixture<FeedFavoritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedFavoritoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedFavoritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
