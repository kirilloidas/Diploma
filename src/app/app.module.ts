import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainBannerComponent } from './main-page/main-banner/main-banner.component';
import { DevelopmentListComponent } from './main-page/development-list/development-list.component';
import { CustomCallComponent } from './main-page/custom-call/custom-call.component';
import { PortfolioInMainComponent } from './main-page/portfolio-in-main/portfolio-in-main.component';
import { ReviewsComponent } from './main-page/reviews/reviews.component';
import { AboutUsComponent } from './main-page/about-us/about-us.component';
import { ContactsComponent } from './main-page/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    MainBannerComponent,
    DevelopmentListComponent,
    CustomCallComponent,
    PortfolioInMainComponent,
    ReviewsComponent,
    AboutUsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
