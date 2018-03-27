export class Product {
  id: number;
  title: string;
  description: string;
  img: any;
  price: number;
  constructor(id: number, title: string, description: string, img: any, price:number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img = img;
    this.price = price;
  }
}
