console.log("First");

setTimeout(() => {
  console.log("second");
}, 1000);

let res = fetch("https://fakestoreapi.com/products");

res.then((val) => val.json()).then((data) => console.log(data));

console.log(res);

console.log("end...");
