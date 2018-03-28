import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {
  cartProducts: any;
  constructor(private router: Router) { }

  ngOnInit() {this.initiateData();
  }

initiateData() {
  const data = localStorage.getItem('cart');
  if (data !== null) {
    this.cartProducts = JSON.parse(data);
  } else {
    this.cartProducts = [];
  }
}
}
