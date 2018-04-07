// forEach
[1, 2, 3].forEach((item, index) => {
  console.log(`item ${item} has index ${index}`)
})

// map
const three = [1, 2, 3]
const doubled = three.map((item) => {
  return item * 2
})
console.log(`.map() ${doubled}`)

// filter
ints = [1, 2, 3]
const evens = ints.filter((item) => {
  return item % 2 === 0
})
console.log(`.filter() ${evens}`)

// reduce
const sum = [1, 2, 3].reduce((result, item) => {
  return result + item
})
console.log(`.reduce() ${sum}`)

// some
const hasNegativeNumbers = [1, 2, 3, -1, 4].some((item) => {
  return item < 0
})
console.log(`.some() ${hasNegativeNumbers}`)

//every
const allPositiveNumbers = [1, 2, 3].every((item) => {
  return item > 0
})
console.log(`.every() ${allPositiveNumbers}`)

// find
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}]
const found = objects.find((item) => {
  return item.id === 'b'
})
console.log(`.find() ${found}`)
console.log(found)

// findIndex
const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}]
const foundIndex = objects2.findIndex((item) => {
  return item.id === 'b'
})
console.log(`.foundIndex() ${foundIndex}`)