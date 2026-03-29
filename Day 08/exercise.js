const dog = {}
console.log(dog)
dog.name = undefined
dog.legs = undefined
dog.color = undefined
dog.age = undefined

dog.bark = function() {
    console.log("Woof Woof")
}


for (const user of users) {
    if (user.points >= 50) {
        count +=1 
    }
}


const personAccount = { firstName : undefined,
                        lastName : undefined,
                        incomes : undefined,
                        expense : undefined,
}

personAccount.totalIncome = function() {
    return personAccount.incomes
}
