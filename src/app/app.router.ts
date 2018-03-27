import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import {DisplayInfoComponent} from './display-info/display-info.component';
import {PayementComponent} from './payement/payement.component';

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'card', component: CardComponent},
  {path: 'display', component: DisplayInfoComponent},
  {path: 'pay', component: PayementComponent},
  ];
export const routes: ModuleWithProviders = RouterModule.forRoot(router)
