import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
