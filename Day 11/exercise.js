const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
// console.log(constants)
// let [fin, est, sw, den, nor] = countries
// console.log(countries)

// let {width : w, height : h, area: a, perimeter: p } = rectangle
// console.log(w)


users.forEach(user => {
  const { name, scores, skills, age } = user;
  console.log(name, scores, skills, age);
});

const lessThanTwoSkills = users.filter(user => user.skills.length < 2);
console.log(lessThanTwoSkills);