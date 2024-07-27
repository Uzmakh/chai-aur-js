// let score = 33    //number
// let score = '33'    //string
// let score = '33abc    //number as a bug   -   NaN
// let score = null;    //typeof - 0
// let score = undefined;    //typeof - undefined
// let score = true;    //typeof - 1
// let score = false;    //typeof - 0
let score = "Hitesh";    //typeof - string

// const { score } = req.body;

// console.log(typeof score)
// console.log(typeof (score))

// data-type conversion
// String to Number
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// console.log(typeof score)

// "33" => 33
// "33abc" => NaN - typeof - number
// true => 1:
//  false => 0;


// Examples
// let isLoggedIn = 1;
// let isLoggedIn = "";
let isLoggedIn = "Hitesh";
// Boolean to String or Number
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)
console.log(typeof isLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "abndsf" => true

// Number to String
/*
let someNumber = 33;
let strToNum = String(someNumber)
console.log(strToNum)
console.log(typeof strToNum)

*/