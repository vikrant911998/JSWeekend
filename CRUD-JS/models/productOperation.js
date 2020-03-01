const productOperations = {
  products: [],
  add(productObject) {
    this.products.push(productObject);
  },

  save_on_server() {
    let promise = firebase
      .database()
      .ref("CRUD-2020-products")
      .set(this.products);

    return promise;
  },
  fetch_from_server() {
    let firebase_promise = firebase.database().ref("CRUD-2020-products");

    return firebase_promise;
  }
};
