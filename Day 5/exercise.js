let arr = []
let arr2 = new Array(6)
arr2.length
console.log(arr[0], arr[Math.floor(arr.length/2)], arr[arr.length-1])
arr.sort()
arr.reverse()
arr.slice(0,3)
arr.slice(-3)

let text = 'I love teaching and empowering people'

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.shift('Meat')
shoppingCart.push('Sugar')
shoppingCart.pop('Honey')
shoppingCart[shoppingCart.findIndex('Tea')]='HoneyTea'

//level 3
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let new_ages = ages.sort()
let min = new_ages[0]
let max = new_ages[-1]

//[1,2,3,4], [1,2,3,4,5]
if (new_ages.length % 2 == 1) {
    let medianIndex = Math.floor(new_ages.length/2)
    console.log(new_ages[medianIndex])
}
else {
    let medianIndex = Math.floor(new_ages.length/2)
    console.log((new_ages[medianIndex] + new_ages[medianIndex + 1])/2)
}

