
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
console.log("Result:", result) 

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
console.log(userLoginMessage())

// * userName can be given by default
function userLoginMessage(userName = "Guest User") {
  if (userName === undefined) {
    console.log("Please enter your user name.")
    return
  }
  return `${userName} just logged in`
}
// console.log(userLoginMessage("Nauman Ali"))
console.log(userLoginMessage("Sarim Ali"))