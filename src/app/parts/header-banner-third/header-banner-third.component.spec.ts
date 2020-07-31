import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerThirdComponent } from './header-banner-third.component';

describe('HeaderBannerThirdComponent', () => {
  let component: HeaderBannerThirdComponent;
  let fixture: ComponentFixture<HeaderBannerThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBannerThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBannerThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
