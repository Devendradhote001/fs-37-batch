let form = document.querySelector("form");
let cards = document.querySelector(".cards");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = form[0].value;
  let email = form[1].value;
  let mobile = form[2].value;
  let url = form[3].value;

  if (!name || !email || !mobile || !url) {
    alert("all fields are required");
    return;
  }

  if (!mobile.length === 10) {
    alert("Only 10 digits are required");
    return;
  }

  let obj = {
    name,
    email,
    mobile,
    url,
  };

  cards.innerHTML += `<div class="user-card">
                <div class="img">
                    <img src="${url}" alt="">
                </div>

                <div class="text">
                    <h1>${name}</h1>
                    <p>${email}</p>
                </div>

                <div class="btns">
                    <button id="edit">Edit</button>
                    <button id="del">Delete</button>
                </div>
            </div>`;

  form.reset();

  console.log(obj);
});
