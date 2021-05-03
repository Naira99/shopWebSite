export class Journal {
  id: number;
  date: string;
  title: string;
  image: string
  description: string
  constructor(id = Math.floor(Math.random() * (100 - 2 + 1) + 2), date, title, image, description) {
    id = this.id;
    this.title = title;
    this.date = date;
    this.image = image;
    this.description = description;
  }
}
