// console.log("while loop");

// Arrays...

// mutable and immutable

// let tomObj = {
//   name: "Tom",
//   color: "blue",
//   dushman: "Jerry",
//   food: "milk",
// };

// spread operator-> ...

// let jerryObj = {
//   ...tomObj,
// };
// jerryObj.name = "jerry";

// console.log(jerryObj);
// console.log(tomObj);

// push

// add at last
// arr.push(34);

// remove from last
// pop
// arr.pop();

// remove from start
// shift
// arr.shift();

// unshift
// arr.unshift(67);

// slice - immutable
// let res = arr.slice(0, 5);
// console.log(res);

// splice
// arr.splice(2);

// reverse

// arr.reverse();

let arr = [1, 3, 5, 10];

// sort
arr.sort((a, b) => b - a);

// console.log(arr);

// methods

// forEach
// map
// filter
// find
// findIndex
// reduce

// let arr = ["Thailand", "Bangkok", "Singapore", "Malasyia", "Europe"];

// let arr2 = [...arr];

// arr2[0] = "Dubai";

// console.log("arr -> ", arr);
// console.log("arr2 -> ", arr2);

let naam = "name";

let student = {
  name: "Shivam",
  batch: "fs-37",
};

// student.name = "polo";

// Callback functions

// Higher order functions

// let outer = () => {
//   return () => {
//     return () => {
//       return () => {
//         console.log("hello i m god");
//         return 10;
//       };
//     };
//   };
// };

// let ans1 = outer();
// let ans2 = ans1();
// let ans3 = ans2();
// let ans4 = ans3();

// console.log(ans4);

// data fetching

let employee = {
  name: "Vansh",
  company: [
    {
      name: "Zoho",
      designation: "SDE1",
      team: {
        name: "Async",
        members: [
          {
            name: "Piyush",
            age: 67,
            projects: [
              {
                name: "Web",
                techStack: ["Full stack", "Django", "Rust", "Swift"],
              },
            ],
          },
          {
            name: "Avinash",
            age: 56,
          },
        ],
      },
    },
    {
      name: "Odo",
      designation: "Counsellor",
    },
  ],
};

// console.log(employee.company[0].team.members[0].projects[0].techStack[3]);

let company = {
  name: "TechNova Solutions",
  founded: 2015,
  "is-public": false,
  headquarters: {
    city: "Bengaluru",
    address: {
      street: "42 Outer Ring Road",
      "pin code": "560103",
      geo: {
        lat: 12.9352,
        lng: 77.6245,
      },
    },
  },
  departments: [
    {
      id: "D01",
      name: "Engineering",
      head: {
        empId: "E001",
        "full name": "Riya Mehta",
        contact: {
          email: "riya@technova.dev",
          phones: {
            work: "+91-9000000001",
            personal: "+91-9000000002",
          },
        },
      },
      teams: [
        {
          teamName: "Frontend",
          "tech-stack": ["React", "TypeScript", "Vite"],
          members: [
            {
              empId: "E101",
              "full name": "Aarav Sharma",
              role: "Senior Frontend Developer",
              salary: {
                base: 1800000,
                bonus: 200000,
                currency: "INR",
              },
              skills: [
                { name: "React", level: "expert" },
                { name: "CSS", level: "advanced" },
              ],
              projects: [
                {
                  title: "Dashboard 2.0",
                  status: "in-progress",
                  tasks: [
                    { taskId: "T1", title: "Setup routing", done: true },
                    { taskId: "T2", title: "Build charts", done: false },
                  ],
                },
              ],
            },
            {
              empId: "E102",
              "full name": "Sneha Patil",
              role: "Frontend Developer",
              salary: {
                base: 1100000,
                bonus: 80000,
                currency: "INR",
              },
              skills: [
                { name: "JavaScript", level: "advanced" },
                { name: "Tailwind", level: "intermediate" },
              ],
              projects: [
                {
                  title: "Landing Page Revamp",
                  status: "completed",
                  tasks: [
                    { taskId: "T3", title: "Hero section", done: true },
                    { taskId: "T4", title: "SEO audit", done: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          teamName: "Backend",
          "tech-stack": ["Node.js", "Express", "MongoDB"],
          members: [
            {
              empId: "E201",
              "full name": "Kabir Khan",
              role: "Backend Lead",
              salary: {
                base: 2200000,
                bonus: 300000,
                currency: "INR",
              },
              skills: [
                { name: "Node.js", level: "expert" },
                { name: "System Design", level: "advanced" },
              ],
              projects: [
                {
                  title: "Payment Gateway",
                  status: "in-progress",
                  tasks: [
                    {
                      taskId: "T5",
                      title: "Razorpay integration",
                      done: false,
                    },
                    { taskId: "T6", title: "Webhook handler", done: true },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "D02",
      name: "Marketing",
      head: {
        empId: "E002",
        "full name": "Vikram Rao",
        contact: {
          email: "vikram@technova.dev",
          phones: {
            work: "+91-9000000003",
            personal: "+91-9000000004",
          },
        },
      },
      teams: [
        {
          teamName: "Social Media",
          "tech-stack": ["Canva", "Meta Ads"],
          members: [
            {
              empId: "E301",
              "full name": "Ananya Iyer",
              role: "Content Strategist",
              salary: {
                base: 900000,
                bonus: 50000,
                currency: "INR",
              },
              skills: [
                { name: "Copywriting", level: "expert" },
                { name: "Video Editing", level: "intermediate" },
              ],
              projects: [
                {
                  title: "Diwali Campaign",
                  status: "planned",
                  tasks: [
                    { taskId: "T7", title: "Reel scripts", done: false },
                    { taskId: "T8", title: "Ad budget plan", done: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  clients: {
    "C-201": {
      name: "FinEdge Bank",
      contract: { value: 5000000, renewal: "2027-03-31" },
    },
    "C-202": {
      name: "ShopKart",
      contract: { value: 3200000, renewal: "2026-12-15" },
    },
  },
  financials: {
    2024: { revenue: 42000000, profit: 6000000 },
    2025: { revenue: 58000000, profit: 9500000 },
  },
};

// console.log(
//   company.departments[0].teams[0].members[0].projects[0].tasks[1].title,
// );

// closure

// loops

// methods

// const students = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     class: 10,
//     section: "A",
//     address: "Bhopal, Madhya Pradesh",
//   },
//   {
//     id: 2,
//     name: "Priya Verma",
//     class: 9,
//     section: "B",
//     address: "Indore, Madhya Pradesh",
//   },
//   {
//     id: 3,
//     name: "Aman Singh",
//     class: 12,
//     section: "C",
//     address: "Jaipur, Rajasthan",
//   },
//   {
//     id: 4,
//     name: "Sneha Patel",
//     class: 8,
//     section: "A",
//     address: "Ahmedabad, Gujarat",
//   },
//   {
//     id: 5,
//     name: "Rohit Gupta",
//     class: 11,
//     section: "B",
//     address: "Lucknow, Uttar Pradesh",
//   },
//   {
//     id: 6,
//     name: "Anjali Mishra",
//     class: 7,
//     section: "C",
//     address: "Pune, Maharashtra",
//   },
//   {
//     id: 7,
//     name: "Vikram Yadav",
//     class: 10,
//     section: "B",
//     address: "Delhi, India",
//   },
//   {
//     id: 8,
//     name: "Neha Joshi",
//     class: 9,
//     section: "A",
//     address: "Mumbai, Maharashtra",
//   },
//   {
//     id: 9,
//     name: "Karan Mehta",
//     class: 12,
//     section: "A",
//     address: "Surat, Gujarat",
//   },
//   {
//     id: 10,
//     name: "Pooja Tiwari",
//     class: 8,
//     section: "B",
//     address: "Nagpur, Maharashtra",
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name);
// }

// forEach -> no return or no change in original value

// let res = students.forEach((val, index) => {
//   // console.log(val.address);
// });

// console.log(res);

// map

// let res = students.map((val, index) => {
//   return val.section === "A";
// });
// console.log(res);

// filter

// let res = students.filter((val, index) => {
//   return val.section === "D";
// });

// console.log(res);

// reduce

// level 3-

// event loop
// de-structuring
// hoisting
// GEC - Global execution context
// EC- execution context

// foreach - only traverse no return

// it return array
// map -> traversal and return same length array
// filter -> traversal and return only truthy condition

let numArr = [45, 6, 7, 87, 90, 45, 34, 32, 45, 67, 87, 1, 45, 6];

let users = ["ravi", "piyush", "aryan", "elvish", "samay", "ravi"];

// it returns single value
// reduce
// find

let res = numArr.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(res);

// let res = users.find((val) => {
//   return val === "ravi";
// });

// console.log(res);

// questions

// const products = [
//   { id: 1, name: "iPhone 15",     price: 79999, inStock: true  },
//   { id: 2, name: "Boat Airdopes", price: 1499,  inStock: true  },
//   { id: 3, name: "MacBook Air",   price: 99999, inStock: false },
//   { id: 4, name: "Redmi Note 13", price: 14999, inStock: true  },
// ];

const students = [
  { id: 1, name: "Aman", city: "Bhopal", marks: 85 },
  { id: 2, name: "Priya", city: "Indore", marks: 32 },
  { id: 3, name: "Rohit", city: "Bhopal", marks: 67 },
  { id: 4, name: "Sneha", city: "Jabalpur", marks: 91 },
  { id: 5, name: "Karan", city: "Indore", marks: 38 },
];

// -----------------------------------
// 1. From students, return an array of strings like:
// "Aman from Bhopal scored 85"
// -----------------------------------

let ans = students.map(
  (val) => `${val.name} from ${val.city} scored ${val.marks}`,
);

console.log(ans);

// -------------------------------------
// 2. From students, return a new array of objects where
// each student also has a result property set to "Pass" if
// marks ≥ 40 and "Fail" otherwise. The original array must
// not change.
// -------------------------------------

// let answ = students.map((val) =>
//   val.marks >= 40 ? { ...val, result: "pass" } : { ...val, result: "fail" },
// );

// console.log(answ);

// -------------------------------------
// 3. From students, get all students who passed (marks ≥ 40).
// -------------------------------------

// -------------------------------------
// 4. From products, get products that are in stock AND cost
// less than ₹20,000.
// -------------------------------------

// -------------------------------------
// 5. From students, find the first student who
// failed (marks < 40).
// -------------------------------------

// -------------------------------------
// 6. Using students, get the names of students from
//  Bhopal who passed.
// -------------------------------------

let rr = students.filter((val) => {
  if (val.city === "Bhopal" && val.marks >= 40) {
    return val.name;
  }
});

console.log(rr.map(val => val.name));
