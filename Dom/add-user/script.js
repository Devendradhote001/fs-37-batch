let form = document.querySelector("form");

form.addEventListener("submit", (events) => {
  events.preventDefault();

  if (form[0].value.length <= 0) {
    alert("please add some values");
    return;
  }

  let h1 = document.createElement("h1");

  h1.textContent = form[0].value;

  document.body.appendChild(h1);
  form.reset();
});
