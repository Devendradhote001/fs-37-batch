// Variables

// var - normal, ye higher authority member
// let - normal
// const- normal+no change/constant

// var a = 90

// var a = 90;

// let b = 89;

// b = 78;

// b = "pol";

// Data types

// there are 2 types ----

// 1. Primitive

// 1.strings - ""
// 2. Number - 123456
// 3. Boolean - true/ false
// 4. bigInt - 354375n
// 5.Null -
// 6.undefined -
// 7. Symbol() -
// 8. NaN

// 2. non-primitive/ Reference
// 1. Arrays - []
// 2. Objects
// 3. Functions
let pesa = 500000000;

let books = ["Social", "Evs", "Maths", true, 78, () => {}, null, undefined];

let obj1 = {
  name: "Satyam",
  branch: "EC",
  age: 67,
  address: "Indrapuri",
};

let obj2 = {
  name: "Shivam",
  branch: "CSE",
  age: 21,
  address: "Mumbai",
};

let kuchBhi = {
  name: "Nahi pata",
  branch: "Vo bhi nahi pta",
  age: 100,
  address: "Dam ho to dhundh lo",
};

console.log(kuchBhi);

let students = [obj1, obj2, kuchBhi];

console.log(students);
