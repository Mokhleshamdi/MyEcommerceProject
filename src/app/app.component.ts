import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listItems: any;
  constructor() {
    this.listItems = [
      {  name: 'Home',
        link: '#/home',
         class: 'fa fa-user fa-lg'},
      {  name: 'Products',
        link: '#/products',
      class: 'fa fa-users fa-lg'},
      {  name: 'Card',
        link: '#/card',
      class: 'fa fa-dashboard fa-lg'},
      {  name: 'About',
        link: '#/about',
      class: 'fa fa-globe fa-lg'},

    ];
  }
}
