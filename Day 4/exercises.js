let userInput = prompt("Enter you age:")
userInput = Number(userInput);
if (userPrompt > 18) {
    console.log("You are old enough to drive.")
}  else {
    let yearsLeft = 18 - userPrompt
    console.log(`You are left with ${yearsLeft} years left.`)
}

//exercise 3 
if (a>b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}

a>b ? console.log('a is greater than b') : console.log('a is less than b')


//exercise level 2 
function gradeCalculator(score) {
    if (score >= 80) {
        return 'A'
    } else if (score >= 70) {
        return 'B'
    }
    else if (score >= 60) {
        return 'C'
    }
    else {
        return 'D'
    }
}