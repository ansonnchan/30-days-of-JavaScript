// let word = 'JavaScript'
// word[0] = 'Y'
// console.log(word) // JavaScript (strings are immutable)

// let numOne = 3
// let numTwo = 3

// console.log(numOne == numTwo) // true (primitive values are compared by value)

// let js = 'JavaScript'
// let py = 'Python'
// let js2 = 'JavaScript'

// console.log(js == js2) // true (same string values)
// console.log(js == py) // false (different string values)

//  let lightOne = true
//  let lightTwo = 1
//  console.log(lightOne == lightTwo) // true (boolean values are compared by value)
 
// let arr = [1,2,3,4,5]
// arr[0] = 10
// console.log(arr) // [10, 2, 3, 4, 5] (arrays are mutable)
// console.log(typeof arr)

// let userOne = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }

// let userTwo = {
//     name: 'Anson',
//     role: 'student',
//     country: 'Canada'
// }

// let userThree = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }
// console.log(userOne == userTwo) // false (objects are compared by reference)
// console.log(userOne == userThree) // false (objects are compared by reference)
// console.log(userOne.name == userThree.name) // true (comparing string values)

// const randNum = Math.random()*100
// console.log(randNum) // random number between 0 and 1

// const num = Math.floor(Math.random()*100)
// console.log(num) // random integer between 0 and 99
// console.log(Math.E)
// console.log(Math.LN2)

// const paragraph = 'I love JavaScript. If you do not love JavaScript what else can you love.\
// I love Python too.\
// If you do not love something which can give you all the capabilities to develop an application what else can\
// you love.'

// console.log(paragraph)

// console.log('I love Javascript.\nI hope you do as well')
// console.log('Days\tTopics\tExercises')

// let a = 67 //lmao meme
// let b = 69
// console.log(`The sum of ${a} and ${b} is ${a + b}`) // The sum of 67 and 69 is 136

// let string = 'javascript'
// let firstLetter = string[0]
// let lastLetter = string[string.length-1]

// console.log(firstLetter, lastLetter)

// console.log(string.substring(0,3)) 

// let country = 'Canada'
// console.log(country.toUpperCase().substr(1,4)) //should give ANAD

// let string = '30 Days Of JavaScript'
// console.log(string.split(' ')) // ['30', 'Days', 'Of', 'JavaScript']
// console.log(string.split())

// console.log(string.includes('Script')) // true
// console.log(string.includes('script')) // false (case-sensitive)
// console.log(string.includes('ava'))

// let example = 'Anson is a student.'
// console.log(example.replace('Anson', 'Asabeneh')) // Asabeneh is a student.
// console.log(example.replace('Ans', 'Asa')) //Asaon is a student
// console.log(example.replace('And', 'Asa')) //nomatch no replacement

// let sum = 0
// let word = 'Anson is a student'
// let n = word.length
// word = word.split('')

// // for (let i = 0; i < word.length; i++) {
// //     sum += word[i].charCodeAt(0)
// // }
// // for (let char of word) {
// //     sum += char.charCodeAt(0)
// }
// console.log(sum)

