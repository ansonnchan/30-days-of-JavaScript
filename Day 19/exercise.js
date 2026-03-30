// function makeMultiplier(multiplier) {
//     return (num) => {
//         return num*multiplier
//     }
// }

// const double = makeMultiplier(2)
// console.log(double(10))

function personAccount (firstName, lastName) {
    let incomes = []
    let expenses = []

    function addIncome(amount, description) {
        incomes.push({amount, description})
    }

    function addExpense(amount, description) {
        expenses.push({amount, description})
    }

    function totalIncome() {
        return incomes.reduce((acc,curr) => acc + curr.amount,0);
        }

        function totalExpense() {
            return expenses.reduce((acc,curr) => acc = curr.amount,0)
        }
        function accountBalance() {
            return totalIncome() - totalExpense()
        }

        return {
            addIncome, addExpense, accountBalance
        }
    }

    const myAccount = personAccount('Anson', 'Chan')
    myAccount.addIncome(1000, 'Stipend')
    myAccount.addExpense(900, 'Gambling')


    console.log(myAccount.accountBalance())