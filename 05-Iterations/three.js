//? for-of loop
//? for-in loop
//? higher order functions

["", "", ""]
[{}, {}, {}]


// ? for-of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num)
}

const greetings = "Hello Guest!"

for (const greet of greetings) {
  // console.log(`Each letter is ${greet}`)
}

// ?We can practice with continue and/or break

// ? Map
const map = new Map()

map.set('PAK',"Pakistan")
map.set('Fr',"France")
map.set('USA',"United States of America")
map.set('Np', "Nepal")
map.set('PAK', "Pakistan")  //no repeated key-value
map.set('PAK', "Bangladesh")  //taking new value for the same key

// console.log(map)

// ? Now appling loop on map
for (const key of map) {

  // console.log(key)
}
// ? Each key results in an array
//   ['PAK', 'Bangladesh']
// ['Fr', 'France']
// ['USA', 'United States of America']
// ['Np', 'Nepal']

// ? so we do this
for (const [key, value] of map) {
  // console.log(key,':',value)
}


// for-of loop on Object
const games = {
  game1 : 'chess',
  game2 : 'cricket',
}
// for (const [key,value] of games) {
//   // console.log(key,':',value)
// }
// TypeError: games is not iterable, It won't work here
// for-in loop works here for objects

const languages = {
  js: 'Javascript',
  py: 'Python',
  rb:'Ruby'
}

for (const key in languages){
  // console.log(languages[key])
  // console.log(`${key} is shortcut of ${ languages[key] }`)
}

// for-in loop on arrays
const programming = ["javascript", "ruby", "python", "java"]

for (const key in programming){
  // console.log(key)
  // console.log(programming[key])
}

// ? for-in loop on map
for (const key in map){
  // console.log(key)
}
// It won't work on map, as map is not iterables

// ? higher order functions
// .forEach() on array
const coding = ["javascript", "ruby", "python", "java"]

coding.forEach(function (val) {
  // console.log(val)
})
// with arrow function
coding.forEach((val) => {
  // console.log(val)
})

// using a function in forEach() method
function printMe(val) {
  // console.log(val)
}
coding.forEach(printMe)

// full syntax of forEach
coding.forEach((item, index, coding)=>{
  console.log(item, index, coding)
});

const myCoding = [
  {
    languageName: 'Javascript',
   fileName:'js'
  },
  {
    languageName: 'Ruby',
    fileName: 'rb'
  },
  {
    languageName: 'Python',
    fileName: 'py'
  },
]
// iteration on array of objects
myCoding.forEach((item) => {
  console.log(item.languageName)
})