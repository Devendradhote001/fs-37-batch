let createBtn = document.querySelector(".create");

let closeBtn = document.querySelector("#close");

let formBox = document.querySelector(".form-box");

let form = document.querySelector("form");

let container = document.querySelector(".container");

let productArr = [
  {
    productName: "dhfksdhf",
    productPrice: "dsjgdjs",
    productImage:
      "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
  },
  {
    productName: "dhfksdhf",
    productPrice: "dsjgdjs",
    productImage:
      "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
  },
  {
    productName: "dhfksdhf",
    productPrice: "dsjgdjs",
    productImage:
      "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
  },
  {
    productName: "dhfksdhf",
    productPrice: "dsjgdjs",
    productImage:
      "https://pebel.in/cdn/shop/files/pastel_green_only.jpg?v=1764584471",
  },
];

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
                <button class="update">Update</button>
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

  productArr.push(productObj);

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
