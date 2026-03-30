localStorage.setItem('firstName', 'Anson')
localStorage.setItem('lastName', 'Chan')
localStorage.setItem('age', 19 )
localStorage.setItem('country', 'Canada')
localStorage.setItem('city', 'Vancouver')

const student ={
    firstName: 'Anson',
    lastName: 'Chan',
    age: 20,
    country: 'Canada',
    skills: ['Java', 'JavaScript', 'Python', 'Machine Learning'],
    enrolled: true
}

localStorage.setItem('student', JSON.stringify(student))