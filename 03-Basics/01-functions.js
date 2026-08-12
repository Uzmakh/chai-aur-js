// ? Functions-Part 01 Introduction
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2) {
//   console.log(number1 +number2)
// }
// addTwoNumbers(3, 8)   //11
// addTwoNumbers(3, "8")   //38
// addTwoNumbers(3, "a")    //3a
// addTwoNumbers(3, null)    //3


// We have to put some conditionals in the function to get same datatype

// number1,number2  - parameters are the variable names when defining a function
// 3 , 8 are arguments when calling the function


function addTwoNumbers(number1, number2) {
  // console.log(number1 + number2)
}

// const result = addTwoNumbers(3, 8);
// console.log("Result:", result)   //Result: undefined

//* use of return in function
function addTwoNumbers(number1, number2) {
  let result = number1 + number2
  // console.log(number1 + number2)
  return result
}

const result = addTwoNumbers(3, 8);
// console.log("Result:", result) 

//? Task: when a user loggedin, show him a message of logging in
// function userLoginMessage(userName) {
//   return `${userName} is logged in`
// } 
// console.log(userLoginMessage("Nauman Ali"))


// * if userName is undefined
function userLoginMessage(userName) {
  if (userName === undefined) {
    console.log("Please enter your user name.")
    return
  }
  return `${userName} just logged in`
}
// console.log(userLoginMessage("Nauman Ali"))
// console.log(userLoginMessage())

// * userName can be given by default
function userLoginMessage(userName = "Guest User") {
  if (userName === undefined) {
    console.log("Please enter your user name.")
    return
  }
  return `${userName} just logged in`
}
// console.log(userLoginMessage("Nauman Ali"))
// console.log(userLoginMessage("Sarim Ali"))

// ? Functions-Part 02
// ? Functions with Objects and Arrays

// function calculateCartPrice(num1){
// return num1
// }
// console.log(calculateCartPrice(2))

// *  the rest operator, represented by three dots, which allows developers to pass an indefinite number of arguments into a function as a single array-values combining in a bundle

// function calculateCartPrice(...num1) {
//   return num1
// }
// console.log(calculateCartPrice(200, 400, 300))   //[ 200, 400, 300 ]
//*  How rest operator pass into a function,means multiple vlaues passing

function calculateCartPrice(val1,val2,...num1) {
  return num1
}
// console.log(calculateCartPrice(200, 400, 300)) //[ 300 ]

// * How to use an object in a function?
const item = {
  itemName: "Ear Buds",
  itemPrice:4500
}
function handleObject(anyObject) {
  // console.log(`itemName is ${anyObject.itemName} and price is ${anyObject.itemPrice}`)
}
// handleObject(item);  //itemName is Ear Buds and price is 4500

// * direct object can also be passed in argument as,
handleObject({
  itemName: "Ear Buds",
  itemPrice: 4500
});


// * How to use an array in a function?
const myArray = [200, 500, 800, 1000]

function returnSecondValue(getArray) {
  return getArray[3]
}
// console.log(returnSecondValue(myArray))  //1000
// OR
console.log(returnSecondValue([200, 500, 800, 1000]))  //1000