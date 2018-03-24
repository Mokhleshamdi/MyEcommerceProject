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
        link: '#/home' },
      {  name: 'Products',
        link: '#/products' },
      {  name: 'Card',
        link: '#/card' },
      {  name: 'About',
        link: '#/about' },

    ];
  }
}
