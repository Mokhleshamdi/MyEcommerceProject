import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cartProducts: any;
  coin: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.initiateData();
  }

  initiateData() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
      this.coin = 0;
      for (const i in this.cartProducts) {
        this.cartProducts[i]['qt'] = 1;
        this.coin = this.coin + this.cartProducts[i].price * this.cartProducts[i].qt;
      }
    } else {
      this.cartProducts = [];
    }
  }

  updateTotal() {
    this.coin = 0;
    for (const  i in this.cartProducts) {
      this.coin = this.coin + this.cartProducts[i].price * this.cartProducts[i].qt;
    }
  }

  removeItem(id) {
    this.cartProducts.splice(id, 1);
    if (this.cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      localStorage.setItem('cart', null);
    }
  }

  pay() {
    if (this.cartProducts.length) {
      localStorage.removeItem('cart');
      this.initiateData();
      this.router.navigate(['/pay']);
    } else {
      alert('No product in your basket');
    }
  }
}
