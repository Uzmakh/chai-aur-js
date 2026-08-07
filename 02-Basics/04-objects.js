// const tinderUser = new Object()
// console.log(tinderUser)   //{}-empty object


// new instance
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
// { id: '123abc', name: 'Sammy', isLoggedIn: false }


// nested objects
const regularUser = {
  fullName: {
    userFullName: {
      firstName: "Maria",
      lastName:"Akram"
    }
  },
  email:"maria-akram@google.com"
}

// console.log(regularUser.fullName)
// console.log(regularUser.email)
// console.log(regularUser.fullName.firstName)  //undefined
// console.log(regularUser.fullName.userFullName.firstName) //Maria

// console.log(regularUser.fullName?.userFullName.firstName) //use of ? when value is not there

// merging/combining 2 objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "c" }
const obj4={5:"d",6:"e"}
// const obj3= {obj1,obj2}

// console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'c' } }

// with this method, we face the same issue as in arrays, so rather use this method

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //target and source  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' }
// target is the empty object and source are the other objects

// Alternatively,use spread operator
const obj3={...obj1,...obj2,...obj4}

// console.log(obj3)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c' }
// console.log(obj3)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'c', '5': 'd', '6': 'e' }


// Receiving values from database, we get this syntax,
const users = [
  {
    id: 1,
    email: "h@gmail.com"
  },
  {
    id: 1,
    email: "r@gmail.com"
  },
  {
    id: 1,
    email: "t@gmail.com"
  },
]

users[1].email

// console.log(tinderUser)


// very important while working in database objects
// console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));  //[ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));    //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false] ]


// when value does not exist
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))   //true

//MUST know about object prototypes in console

//? Object Destructuring (used when accessing object values)
const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}
// simple way to access object value
console.log(course.courseName)
// Accessing object value with destructuring
const { courseName } = course;
console.log(courseName)

// how destructuring used in React
const navbar = ({company}) => {
  
}


//? JSON API

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// real API url
// https://api.github.com/users/hiteshchoudhary

// I will use fetch method of JS, to access it, I will get the data in response
// After converting JSON into Object, I will access its values

// randomuser.me API response received can be read in JSON Formatter
[
  {},{},{}
]
