//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //false

// const bigNumber = 3456543576654356754n   //BigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
}

const myFunction = function () {
  console.log("Hello world");
}

//? to know the data type of any value

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ! Tutorial-10
// * Stack(Primitives) and Heap(Non-Primitives)

// * Stack(Primitives)
let myName = "Yumna Khalid";
let anotherName = myName;

// console.log(myName);
// console.log(anotherName);

anotherName = "Ayesha Khalid";

console.log(myName);
console.log(anotherName);

// * Heap(Non-Primitives)
let userOne = {
  email: "example@google.com",
  contact : "03142347658"
}

let userTwo = userOne;
userTwo.email="test@google.com"

console.log(userOne.email);
console.log(userTwo.email);

