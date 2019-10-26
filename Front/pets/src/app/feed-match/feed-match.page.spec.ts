import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMatchPage } from './feed-match.page';

describe('FeedMatchPage', () => {
  let component: FeedMatchPage;
  let fixture: ComponentFixture<FeedMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMatchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
