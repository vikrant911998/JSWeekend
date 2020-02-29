window.addEventListener("load", init);

var increase_counter = (function() {
  let counter = 1230451;

  return function() {
    return counter++;
  };
})();

function init() {
  assignId();
  let add_btn = document.querySelector("#add");
  let delete_btn = document.querySelector("#delete");
  let update_btn = document.querySelector("#update");
  let savedb_btn = document.querySelector("#savedb");
  let fetchdb_btn = document.querySelector("#fetchdb");
  let sort_btn = document.querySelector("#sort_btn");

  add_btn.addEventListener("click", add_product);
  delete_btn.addEventListener("click", delete_product);
  sort_btn.addEventListener("click", sort_product);
  update_btn.addEventListener("click", update_product);
  savedb_btn.addEventListener("click", save_product);
  fetchdb_btn.addEventListener("click", fetch_product);
}

function sort_product() {
  console.log("Inside sort Product");
  //   productOperations.products.sort((first, second) =>
  //     first["name"].localeCompare(second["name"])
  //   );

  productOperations.products.sort(
    (first, second) => first["price"] - second["price"]
  );
  printProduct();
}

function delete_product() {
  productOperations.products = productOperations.products.filter(
    product => product.isMarked != true
  );

  printProduct();
}

function add_product() {
  let productObject = new Product();

  for (let key in productObject) {
    if (key == "id") {
      productObject[key] = document.querySelector("#" + key).innerText;
    } else if (key == "isMarked") {
      continue;
    } else {
      productObject[key] = document.querySelector("#" + key).value;
    }
  }
  productOperations.add(productObject);

  console.log(productOperations.products);

  printProduct();
  clearAll();
  assignId();
}

function clearAll() {
  let name = document.querySelector("#name");
  let price = document.querySelector("#price");
  let desc = document.querySelector("#desc");
  let category = document.querySelector("#category");

  name.value = "";
  price.value = "";
  desc.value = "";
  category.value = "";
}

function mark_delete() {
  productOperations.products.forEach(product => {
    if (product.id == this.value) {
      product.toggleMark();
      if (product.isMarked) {
        this.parentNode.parentNode.className = "alert-danger";
      } else {
        this.parentNode.parentNode.classList.remove("alert-danger");
      }
    }
  });
}

function mark_edit() {
  this.parentNode.parentNode.className = "alert-primary";
}

function printProduct() {
  let result = document.querySelector("#result");
  result.innerHTML = "";

  productOperations.products.forEach(product => {
    let tr = document.createElement("tr");

    for (let key in product) {
      if (key == "isMarked") continue;
      let td = document.createElement("td");
      td.className = "";
      td.innerText = product[key];
      tr.appendChild(td);
    }

    let last_cell = document.createElement("td");

    let edit = document.createElement("button");
    edit.className = "btn btn-warning mr-1";
    edit.innerText = "Edit";
    edit.value = product["id"];
    edit.addEventListener("click", mark_edit);

    let del = document.createElement("button");
    del.className = "btn btn-danger";
    del.innerText = "Delete";
    del.value = product["id"];
    del.addEventListener("click", mark_delete);

    last_cell.appendChild(edit);
    last_cell.appendChild(del);

    tr.appendChild(last_cell);
    result.appendChild(tr);
  });
}

// function printProduct(){
//     let result = document.querySelector('#result');

//     productOperations.products.forEach(product=>{
//         let div1 = document.createElement('div');
//         div1.className = "row p-3 border border-dark";

//         for(let key in product){
//             let div = document.createElement('div');
//             div.className = "col ";
//             div.innerText = product[key];
//             div1.appendChild(div);
//         }

//         result.appendChild(div1);
//     });
// }

function assignId() {
  document.querySelector("#id").innerText = increase_counter();
}
