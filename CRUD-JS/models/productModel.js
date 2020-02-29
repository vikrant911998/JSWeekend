class Product {
  constructor(id, name, price, desc, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.category = category;
    this.isMarked = false;
  }

  toggleMark() {
    this.isMarked = !this.isMarked;
  }
}
