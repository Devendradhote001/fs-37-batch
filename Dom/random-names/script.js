let btn = document.querySelector("button");
let box = document.querySelector("main");

let arr = [
  "Satya",
  "Veeru",
  "Gabbar",
  "Basanti",
  "Kaliya",
  "Thakur",
  "Jay",
  "Unknown",
];

let randomColor = [
  "red",
  "purple",
  "green",
  "blue",
  "pink",
  "orange",
  "violet",
  "crimson",
];

let colorPicker = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

btn.addEventListener("click", () => {
  let rn = Math.floor(Math.random() * arr.length);

  let y = Math.floor(Math.random() * 100);
  let x = Math.floor(Math.random() * 100);

  let rc = Math.floor(Math.random() * randomColor.length);

  let h1 = document.createElement("h1");
  h1.textContent = arr[rn];
  h1.style.position = "absolute";
  h1.style.top = `${y}%`;
  h1.style.left = `${x}%`;

  h1.style.color = colorPicker();

  box.append(h1);
});
