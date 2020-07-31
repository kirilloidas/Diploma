import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerSecondComponent } from './header-banner-second.component';

describe('HeaderBannerSecondComponent', () => {
  let component: HeaderBannerSecondComponent;
  let fixture: ComponentFixture<HeaderBannerSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBannerSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBannerSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
