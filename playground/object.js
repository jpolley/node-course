const names = ['Jeremy', 'Amy', 'Moses', 'Judah']
const objs = [
  {firstName: 'Jeremy', lastName: 'Polley', age: 36},
  {firstName: 'Amy', lastName: 'Polley', age: 41},
  {firstName: 'Moses', lastName: 'Polley', age: 5},
  {firstName: 'Judah', lastName: 'Polley', age: 3}
]

// console.log(Object.keys(objs[0]))
// console.log(Object.values(objs[0]))

for ([key, value] of Object.entries(objs[0])) {
  console.log(`key: ${key} value: ${value}`)
}