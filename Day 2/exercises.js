// let challenge = '30 Days of JavaScript'
// console.log(challenge)
// console.log(challenge.length)

// let upperCase = challenge.toUpperCase()
// let lowerCase = challenge.toLowerCase()

// let sliced = challenge.substring(3)
// console.log(sliced)

// console.log(challenge.includes('Script'))
// let arr = challenge.split('')
// let arr2 = challenge.split(' ')

 let exerciseString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
 let arr3 = exerciseString.split(', ')
 console.log(arr3)
// console.log(challenge.charAt(15))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

// let string2 = 'You cannot end a sentnec with because because is a conjunction.'
// console.log(string2.search('because'))
// console.log(challenge.trim())
// console.log(challenge.startsWith('3'))
// console.log(challenge.endsWith('t'))

//exercise lvl 2
// console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes\
//     teaches us to help one another')
// console.log((typeof '10') == (typeof 10))
// console.log((typeof parseInt('10')) == (typeof 10))

console.log(Math.floor(Math.random()*101))

//Exercise levl 3
let string1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let arr = string1.split(' ')
let sum = 0
for (let string of arr) {
    if (string == 'love') {
        sum++
    }
}
console.log(sum)