// There are two methods to create objects- Literal and Construxctor
// Constructor method creates singleton object and not Literal method.

// singleton-Object.create (Not for our use at now)

// object literals

const mySym = Symbol("key1")


const myObject = {
  name: "Ghazi",
  age: 26,
  city: "Multan",
  email: "ghazi123@gmail.com",
  [mySym]: "mykey1",
  isLoggedIn: false,
  lastLoginDays:["thurs","fri"]
}

// accessing object-key values
// console.log(myObject.email)
// console.log(myObject["email"])  //it takes the keys as string
console.log(myObject["full name"])  //undefined
console.log(myObject[mySym])   //mykey1

// how to change object values
myObject.email = "ghazigee@gmail.com";
// console.log(myObject.email);

// freeze an object
// Object.freeze(myObject);
// console.log(myObject);  //it changed the email

myObject.email = "ghazigee@microsoft.com";
console.log(myObject);   //it doesn't change it;our object is now freeze

// Adding a function in an object
myObject.greeting = function () {
  console.log("I am a function")
}

console.log(myObject.greeting)  //[Function (anonymous)]-function not executed but its reference is here
console.log(myObject.greeting()) //error is here as we freeze the object

myObject.greetingTwo = function () {
  console.log(`Hello function! ${this.lastLoginDays}`)
}
console.log(myObject.greetingTwo())