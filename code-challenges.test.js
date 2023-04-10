// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


// a) Create a test with an expect statement using the variable provided.
// Pseudo: Create a test that takes in a function called sentenceCap that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// Run the test and expect the correct error "ReferenceError: sentenceCap is not defined" before function is initialized.
// Run the test again after function is initialized and expect the test to pass with the output of --> ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (2 ms)
describe("sentenceCap", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(sentenceCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
})
})


const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Pseudo code: Create a function called sentenceCap that takes in an array
// Use Object.values with the array as its parameter to access the values (don't forget to add a return statement before Object.values).
// Use string interpolation and within it Map on the new array and return the values.name.split(" "). This will put the names separated into new array fo strings.
// Map on that array and uppercase the first index of each value while adding the substring starting at index of 1 to it, finally use the join method to combine them. This should give you each name capitalized in one string.
// Add the word is in the string interpolation followed by values.occupation to add the last part of string, finally add a period and close the string interpolation.

// Raw Code following the pseudo
const sentenceCap = (array) => {
   return Object.values(array).map(value => {
  return `${value.name.split(" ").map(value => value[0].toUpperCase() + value.substring(1)).join(" ")} is ${value.occupation}.`
  })
}

// Refactored code using deconstruction to access name and occupation directly
// const sentenceCap = (array) => {
//   return array.map(({ name, occupation }) => {
//     const capName = name.split(" ").map(value => value[0].toUpperCase() + value.substring(1)).join(" ")
//     return `${capName} is ${occupation}.`
//   })
// }


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
// Pseudo: Create a test for the remainders function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// Run the test and expect the correct error "ReferenceError: remainders is not defined" before function is initialized.
// Run the test again after function is initialized and expect the test to pass with the output of --> ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
})
})

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
// Pseudo: Create a function called remainders that takes in an array. 
// First write the return statement, then use map to iterate over the array
// create a conditional that returns the remainder of the numbers when divided by 3 only if the type of the value is a number
// Finally use the filter method to filter out all the undefined values left within the array

// Raw code following pseudo
const remainders = (array) => {
  return array.map(value => {
    if (typeof value === 'number') {
      return value % 3} 
  }).filter(value => typeof value !== 'undefined')
}
// Refactored code using filter before map to filter out everything that isn't a number.
// const remainders = (array) => {
//   return array.filter(value => typeof value === 'number').map(num => num % 3)
// }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// Pseudo: Create a test for the function called sumCubed that takes in an array of numbers and returns the sum of all the numbers cubed.
// Run the test and expect the correct error "ReferenceError: sumCubed is not defined" before function is initialized.
// Run the test again after function is initialized and expect the test to pass with the outputs of --> ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)

describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    expect(sumCubed (cubeAndSum1)).toEqual(99)
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubed (cubeAndSum2)).toEqual(1125)
})
})
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.
// Create a function called sumCubed that takes in an array
// First write the return statement, then use map on the array and multiply each value by itself 3 times to get the cubed amount for each value. Then use the reduce method to add the previous value to the next value to each other.

// Raw code following Pseudo
const sumCubed = (array) => {
return array.map(value => value * value * value).reduce((a ,b) => a + b)
} 

// Refactored code after finding the Math.pow method and learning more about the reduce method
// const sumCubed = (array) => {
//   return array.reduce((sum, value) => sum + Math.pow(value, 3), 0)
// }
