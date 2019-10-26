import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAdopcionPage } from './feed-adopcion.page';

describe('FeedAdopcionPage', () => {
  let component: FeedAdopcionPage;
  let fixture: ComponentFixture<FeedAdopcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedAdopcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedAdopcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
