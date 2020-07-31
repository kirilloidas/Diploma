import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "services", component: ServicesComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
