const sample = [1, 2, 3, 4] // i am never gonna change Boo! Yeah
const names = ['Jeremy', 'Amy', 'Moses', 'Judah']
const objs = [
  {firstName: 'Jeremy', lastName: 'Polley', age: 36},
  {firstName: 'Amy', lastName: 'Polley', age: 41},
  {firstName: 'Moses', lastName: 'Polley', age: 5},
  {firstName: 'Judah', lastName: 'Polley', age: 3}
]


let mapped = sample.map(elem => elem * 10)
console.log(sample, mapped);

let namesLength = names.map(name => name.length)
console.log(namesLength)

let ages = objs.map(obj => obj.age)
console.log(ages)

let grownFolks = objs.map(obj => {
  if (obj.age > 18) {
    return obj
  }
})
console.log(grownFolks)