const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// const fetchCountries = async () => {
//     try {
//         const response = await fetch(countriesAPI)
//         const countiries = await response.json()

//         countries.forEach(country => {
//             const {name, capital, languages, population, area} = country;

//             console.log(`Country: ${name}, Capital: ${capital}`)
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }

const getCatNames = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        const catNames = cats.map(cat => cat.name)
        console.log(catNames)
    } catch  (err) {
        console.error(err)
    }
}


getCatNames()