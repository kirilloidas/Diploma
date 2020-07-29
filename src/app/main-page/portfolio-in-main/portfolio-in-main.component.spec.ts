import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInMainComponent } from './portfolio-in-main.component';

describe('PortfolioInMainComponent', () => {
  let component: PortfolioInMainComponent;
  let fixture: ComponentFixture<PortfolioInMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioInMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioInMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
