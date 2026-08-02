let myDate = new Date();
console.log(myDate);
console.log(typeof myDate)   //object

//? Formatting methods
console.log(myDate.toString());  //Mon Jul 20 2026 22:37:30 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); //Mon Jul 20 2026
console.log(myDate.toTimeString());  //22:42:41 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toLocaleString());  //7/20/2026, 10:44:46 PM

//? Declaring a specific date
let specificDate = new Date(2026, 0, 1);
console.log(specificDate.toDateString());

let stringDate = new Date("01-14-2023");
console.log(stringDate.toDateString());

let stringDate1 = new Date("01-14-2023");
console.log(stringDate.toLocaleString());

// ? timeStamps

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(stringDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

let createdDate = `Today is ${newDate.getDay()}`;
console.log(createdDate);



