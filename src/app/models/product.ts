export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: Array<string>;
  constructor(id, name, description, price, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;

  }
}
