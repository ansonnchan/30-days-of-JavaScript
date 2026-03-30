// const doSomething = callback => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callback(false, skills)
//     }, 2000)
// }

// const callback = (err, result) => {
//     if (err) {
//         return console.log(err)
//     } 
//     return console.log(result)
// }


// doSomething(callback)

// const promise = new Promise((resolve, reject)  => {
//     resolve('success')
//     reject('failure')
// })

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if (skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })

// doPromise.then(result => {
//     console.log(result)
// }).catch(error => console.log(error))

// const url = 'https://restcountries.com/v2/all'

// fetch(url).then(response=>response.json).then(data => {
//     console.log(data)
// }).catch(error => console.error(error))

const square = async function (n) {
    return n *n
}

console.log(square (2))
