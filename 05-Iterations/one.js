// ? for loop

//* basic syntax
for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(element)
}

// * if-else in for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number")
  }
  // console.log(element)
}

// console.log(element)  //not executed as element is not accessible out of the block

// * nested loops - for-loop in for-loop
for (let i = 0; i < 10; i++) {
  // console.log(`Outer loop value: ${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop value: ${j} and innerloop ${i}`)
    // console.log(i + "*" + j + "=" + i * j); //tables from 0 to 9
  }
}

// * for-loop with array
let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// * break and continue in for-loop

// * break
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of i is ${index}`);
}

// * continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of i is ${index}`);
}
