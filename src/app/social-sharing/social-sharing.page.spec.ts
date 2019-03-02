import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSharingPage } from './social-sharing.page';

describe('SocialSharingPage', () => {
  let component: SocialSharingPage;
  let fixture: ComponentFixture<SocialSharingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialSharingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialSharingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
