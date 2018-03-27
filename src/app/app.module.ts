import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {routes} from './app.router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';
import { DisplayInfoComponent } from './display-info/display-info.component';
import {ProductForSellService} from './product-for-sell.service';
import { PayementComponent } from './payement/payement.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    CardComponent,
    DisplayInfoComponent,
    PayementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ProductForSellService],
  bootstrap: [AppComponent]
})
export class AppModule { }
