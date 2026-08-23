// !Tutorial-21

//var c = 300
let a = 300
if (true) {
  let a = 10
  const b = 20
  var c = 900
  // console.log("INNER: ", a);
  // console.log(b);
}
// console.log(a);
// console.log(b);
// console.log(c);

// ! Tutorial-22
// ? Concept of closure, scope and hoisting
function one() {
  const userName = "Uzma"

  function two() {
    const website = "youtube"
    console.log(userName)  //we can access from parent (closure)
  }
  // console.log(website)    //but can't access from child

  // two();  //this function executes after error resolved
}
one();  //this function won't execute once two doesn't

// ? In if-else statements,
if (true) {
  const username = "Uzma"
  if (username === "Uzma") {
    const website = "youtube"
    console.log(username+website)
  }
  // console.log(website)
  console.log(username)
}
// console.log(username)








