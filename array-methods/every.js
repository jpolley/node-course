const objs = [
  {firstName: 'Jeremy', lastName: 'Polley', age: 36},
  {firstName: 'Amy', lastName: 'Polley', age: 41},
  {firstName: 'Moses', lastName: 'Polley', age: 5},
  {firstName: 'Judah', lastName: 'Polley', age: 3}
]

const checkLastname = (obj) => {
  // console.log(obj.lastName)
  obj.lastName == 'Polley'
}

// console.log(objs.every(checkLastname))

console.log(objs[0].lastName == 'Polley')