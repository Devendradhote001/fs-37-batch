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
    productName: "Watch",
    productPrice: "2000",
    productImage:
      "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2026/FEBRUARY/28/5NEFIynW_878d34044605410b9e1a0dd3114a9a99.jpg",
  },
  {
    productName: "Mobile",
    productPrice: "30000",
    productImage:
      "https://www.gstatic.com/marketing-cms/assets/images/a7/f2/a0de02674b2ead4541c808386585/03-unpacked-use-case-do-more-1440w-2x.webp",
  },
  {
    productName: "Washing Machine",
    productPrice: "40000",
    productImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqadhA0y3KOyGbTKAMkNE4SHvspidoCz6gxwlbsgyp5ErCVjS21IrcnE&s=10",
  },
];

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
