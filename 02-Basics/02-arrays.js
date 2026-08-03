const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvelHeroes[3][1]);   //flash

// ? concat method and spread operator
// .concat()
marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] (again same issue)

const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);  //[ 'thor', 'ironman', 'spiderman' ]
// console.log(allHeroes);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]  - merged two arrays properly into a single array

// spread operator-Alternative way of concatnating/merging 2 arrays
const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// Using flat method for complex array
const complexArray = [1, 2, 3, [4, 5.6], 7, 8, [2, 9, 0, [2, 3]]]
const simpleArray = complexArray.flat(Infinity);
console.log(simpleArray)  //[1, 2, 3, 4, 5.6, 7, 8, 2, 9,0,2, 3]

console.log(Array.isArray("Hitesh"))  //false
console.log(Array.from("Hitesh"))   //[ 'H', 'i', 't', 'e', 's', 'h' ]  - makes an array
console.log(Array.from({ name: "hitesh" })) // interesting - returns empty array that means it cannot convert it into an array with elements, it feels confused whether to make array of keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]