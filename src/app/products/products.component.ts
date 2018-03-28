import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) {

  }

  ngOnInit() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
         id: 1,
        title: 'Samsung',
        description: 'bla bla bla',
        img: 'assets/1.png',
        price: 1200
      },
      {
        id: 2,
        title: 'lenovo',
        description: 'bla bla',
        img: 'assets/2.jpg',
        price: 800
      },
      {
        id: 3,
        title: 'hp',
        description: 'haja behya',
        img: 'assets/3.png',
        price: 3
      },
      {
        id: 4,
        title: 'mac pro',
        description: 'khorda',
        img: 'assets/4.png',
        price: 3
      },
      {
        id: 5,
        title: 'hp wehed ekher',
        description: 'allahou a3lem',
        img: 'assets/5.png',
        price: 4
      },
      {
        id: 6,
        title: 'msi rog',
        description: 'bla bla',
        img: 'assets/6.png',
        price: 3000
      },
      {
        id: 7,
        title: 'mac book pro',
        description: 'pro',
        img: 'assets/7.png',
        price: 4000
      },
      {
        id: 8,
        title: 'lenovo gamer',
        description: 'gamer m3ah manette',
        img: 'assets/8.png',
        price: 2000
      },
      {
        id: 9,
        title: 'pc gamer',
        description: 'blabla',
        img: 'assets/9.png',
        price: 3
      }
    ];
  }




  addToCard(index){
    const product = this.products[index];
    let cartData = [];
    const data = localStorage.getItem('cart');
    console.log( 'data:' + data);
    console.log( 'data type:' + typeof data);
    if(data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    //data = localStorage.getItem('cart');
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCard() {
    this.router.navigate(['/card']);
  }

}
