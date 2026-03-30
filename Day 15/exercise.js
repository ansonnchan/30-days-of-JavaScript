// // class Animal {
// //     constructor(name, age, color, legs) {
// //         this.name = name
// //         this.age = age
// //         this.color = color
// //         this.legs = legs
// //     }

// //     get getName() {
// //         return this.name
// //     }
    
// //     get getAge () {
// //         return this.age
// //     }

// //     get getColor() {
// //         return this.color
// //     }

// //     get animalInfo () {
// //         const info = `This is ${this.getName}. It is ${this.getAge} and it looks ${this.getColor}`
// //         return info
// //     }
// // }


// // class Dog extends Animal {
// //     constructor (name, age, color, legs, gender) {
// //     super(name, age, color, legs)
// //     this.gender = gender
// //     }
// //     get animalInfo() {
// //         let gender2 = this.gender == "Male" ? "He" : "She"
// //         const info = `This is ${this.getName}. ${gender2} is ${this.getAge} and it looks ${this.getColor}`
// //         return info
// //     }
// // }

// // //const animal = new Animal()
// // //console.log(animal)
// // const animal = new Animal("Dong Dong", "15", "White", 4)
// // console.log(animal)
// // console.log(animal.getAge)
// // console.log(animal.getName)
// // console.log(animal.animalInfo)

// // const dongDong = new Dog("Dong Dong", 15, "White", 4, "Male")
// // console.log(dongDong.animalInfo)

// class Statistics {
//     constructor (ages) {
//         this.ages = ages.sort((a,b) => a-b)
//     }

//      mean () {
//         let sum = 0
//         for (const num of this.ages) {
//             sum += num
//         }
//         return sum/this.ages.length
//     }

//     median () { //[1,2,3] [1,2,3,4]
//         let length = this.ages.length
//         if (length % 2 == 0) {
//             return (this.ages[length/2-1] + this.ages[length/2])/2
//         } else {
//             return Math.floor(this.ages[length/2])
//         }
//     }
// }

// const ages = new Statistics ([31,26,34,37,26,32,32,26,27,27,24,32,33,27,25,26,38,37,31,34,24,33,29,26])

// console.log(ages.mean())
// console.log(ages.median())