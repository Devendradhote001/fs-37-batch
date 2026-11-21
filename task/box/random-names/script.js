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

  let div = document.createElement("div");

  div.textContent = arr[rn];

  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = colorPicker();

  div.style.position = "absolute";
  div.style.top = `${y}%`;
  div.style.left = `${x}%`;

  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";

  box.append(div);
});