const Anson = {firstName: 'Anson',
                lastName: 'Chan',
                age: 19,
                country: 'Canada',
                city: 'Vancouver'
}

Anson.major = 'Computer Engineering'
console.log(Anson.firstName)
console.log(Anson.major)

const copyAnson = Object.assign({}, Anson)
console.log(copyAnson)
console.log(Anson)

const entries = Object.entries(copyAnson)
console.log(entries)