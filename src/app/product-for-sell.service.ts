import { Injectable } from '@angular/core';
import {Product} from './Model/Product';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class ProductForSellService {
  private myProducts: Product[];

  constructor() {
    this.myProducts = [
      new Product(1, 'Samsung', 'bla bla bla', 'assets/1.png', 1200)
      ,
      new Product(2, 'lenovo', 'bla bla', 'assets/2.jpg', 800)
      ,
      new Product(3, 'hp', 'haja behya', 'assets/3.png', 3)

    ];
  }

}
