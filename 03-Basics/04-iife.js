// ? Immediately Invoked Function


// * Regular Syntax
// function chai() {
//   console.log(`DB Connected`)
// }
// chai()

// * IIFE Syntax
(function chai() {
  console.log(`DB Connected`)
})();  //; is must after iife

// * to avoid global scope pollution, for the variables and other declarations there, iife are used

(() => {
  console.log(`Now DB CONNECTED!`)
})();

// * with parameter and argument
  ((name) => {
  console.log(`Now DB CONNECTED ${name}!`)
} )('Anaya')
