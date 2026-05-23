// console.log(2 > 2); //false
// console.log(4 >= 4); //true
// console.log(2 < 6); //true
// console.log(2 == 2); //true
// console.log(2 != 2); //false

//? Above are simple comparisons.
//? Problem starts when different data types are compared

// console.log("4" > 2); //true
// console.log("04" > 2); //true

// ? Though the result is predictable but make sure that the data types should be same in case of comparison
// ? TYpescript does not allow you to compare two different data types

// ? confusions while null and undefined is compared to zero
// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);
// console.log(null !== 0);
// console.log(null < 0);
// console.log(null == 0);

// console.log(undefined > 0);
// console.log(undefined = 0);
// console.log(undefined < 0);

// ? comparison and double equal work differently

// ? strict equality ===

console.log("2" == 2);  //true
console.log("2" === 2);   //false