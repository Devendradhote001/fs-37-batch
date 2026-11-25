let createBtn = document.querySelector(".create");

let closeBtn = document.querySelector("#close");

let formBox = document.querySelector(".form-box");

let form = document.querySelector("form");

let container = document.querySelector(".container");

let productArr = JSON.parse(localStorage.getItem("productsData")) || []

let isUpdateClicked = null;

let renderUi = () => {
  container.innerHTML = "";

  productArr.forEach((val, index) => {
    container.innerHTML += `<div class="card">

            <div class="img">
                <img src="${val.productImage}" alt="Product Image">
            </div>

            <div class="product-details">
                <h2>${val.productName}</h2>
                <p class="price">$${val.productPrice}</p>
            </div>

            <div class="actions">
                <button onclick="updateProduct(${index})" class="update">Update</button>
                <button onclick="delFn(${index})" class="delete">Delete</button>
            </div>

        </div>`;
  });
};

renderUi();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = form[0].value;
  let productPrice = form[1].value;
  let productImage = form[2].value;

  if (!productImage || !productName || !productPrice) {
    alert("all fields are required");
    return;
  }

  let productObj = {
    productName,
    productPrice,
    productImage,
  };

  if (isUpdateClicked !== null) {
    // update logic
    productArr[isUpdateClicked] = productObj;
    isUpdateClicked = null;
  } else {
    productArr.push(productObj);
    localStorage.setItem("productsData", JSON.stringify(productArr));
  }

  renderUi();

  form.reset();
  formBox.style.display = "none";
});

createBtn.addEventListener("click", () => {
  formBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formBox.style.display = "none";
});

let delFn = (index) => {
  productArr.splice(index, 1);
  console.log(productArr);

  renderUi();
};

let updateProduct = (index) => {
  let selectedProduct = productArr[index];
  isUpdateClicked = index;

  form[0].value = selectedProduct.productName;
  form[1].value = selectedProduct.productPrice;
  form[2].value = selectedProduct.productImage;

  formBox.style.display = "flex";
};

let obj = {
  name: "Ashish",
  age: 21,
  college: "Sage",
};

// JSON -> javascript object Notation
