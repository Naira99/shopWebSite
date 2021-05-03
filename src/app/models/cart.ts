export class Cart {
  id: number;
  name: string;
  description: string;
  price: number;
  image: Array<string>;
  productCount: number
  constructor(id, name, description, price, image, productCount) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.productCount = productCount || 1;
  }
}
