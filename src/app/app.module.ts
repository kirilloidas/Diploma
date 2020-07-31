import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderBannerFirstComponent } from './parts/header-banner-first/header-banner-first.component';
import { HeaderBannerSecondComponent } from './parts/header-banner-second/header-banner-second.component';
import { HeaderBannerThirdComponent } from './parts/header-banner-third/header-banner-third.component';
import { DevelopmentListComponent } from './pages/index/development-list/development-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    FooterComponent,
    HeaderBannerFirstComponent,
    HeaderBannerSecondComponent,
    HeaderBannerThirdComponent,
    DevelopmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
