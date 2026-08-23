const user = {
  username: "Mohsin Ali",
  age: 29,
  
  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to website!`)
    // * to see what this gives me here
    // console.log(this);
  }
}
// user.welcomeMessage();   //Mohsin Ali, welcome to website!
user.username = "Sam";
user.welcomeMessage();  //Sam, welcome to website!
// the value is according to the current context

// * to see what this gives me here
// console.log(this);  //{} in node environment, this is an empty object
// in browser,this gives us global object



function checkThis() {
  // console.log(this);  //*this-keyword works here for function in node environment
}
checkThis()



// * this keyword doesn't work in function,it works only in object
// function checkThis() {
//   let username="Hania"
//   console.log(this.username);  //undefined
// }
// checkThis()
// * giving variable to a function
const variable = function checkThis() {
  let username = "Hania"
  // console.log(this.username);  //undefined
}

// * introducing arrow function
const variable2 = ()=> {
  let username = "Hania"
  // console.log(this.username);  //undefined
}
checkThis();

// * basic syntax
// const addTwo = (num1, num2) => {
//   return num1+num2
// }

// * implicit return
// const addTwo = (num1, num2) => num1 + num2
// OR
// const addTwo = (num1, num2) => (num1 + num2)



// * Returning an object in arrow function
const addTwo = (num1, num2) => ({ username: "Anaya" })  //*enclosed in parenthesis is MUST

console.log(addTwo(3, 4))

// * arrow function used with array
const myArray = [2, 5, 7, 9, 3]

// *different possibilities for writing arrow function
myArray.forEach(function () {
  
})
myArray.forEach(()=>{return  })
myArray.forEach(()=>({}))