export class Account {
  id: number;
  email: string;
  password: string;
  constructor(id = Math.floor(Math.random() * (100 - 2 + 1) + 2), email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
