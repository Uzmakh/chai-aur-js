const name = "hitesh"
const repoCount = 50

// * not popular way to write srtings
// console.log(name + repoCount + " Value");

//* Instead use string interpolation to concatenate strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Hichochomi-hc-new");

console.log(gameName[2]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Nouman    Ahmed  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '_'));
console.log(url.includes('%20'));

console.log(gameName.split('-'));