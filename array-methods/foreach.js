const objs = [
  {firstName: 'Jeremy', lastName: 'Polley', age: 36},
  {firstName: 'Amy', lastName: 'Polley', age: 41},
  {firstName: 'Moses', lastName: 'Polley', age: 5},
  {firstName: 'Judah', lastName: 'Polley', age: 3}
]

let fullNames = []
objs.forEach(obj => fullNames.push(`${obj.firstName} ${obj.lastName}`))
console.log(fullNames)
