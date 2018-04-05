const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
  let res = utils.add(33, 11)
  expect(res).toBe(44).toBeA('number')
})

it('should async add two number', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number')
    done()
  })
})

it('should square the number', () => {
  let res = utils.square(3)
  expect(res).toBe(9).toBeA('number')
})

it('should async add two number', (done) => {
  utils.asyncSquare(3, (x) => {
    expect(x).toBe(9).toBeA('number')
    done()
  })
})


it('should set first and last name', () => {
  let user = {age: 36, location: 'Concord'} 
  utils.setName(user, 'Jeremy Polley')
  expect(user).toInclude({
    firstName: 'Jeremy',
    lastName: 'Polley'})
    .toBeA('object')
})

// it('should expect some values', () => {
//   // expect(12).toNotBe(11)
//   // expect({name: 'Jeremy'}).toEqual({name: 'Jeremy'})
//   // expect([2,3,4]).toInclude(4)
//   // expect([2,3,4]).toExclude(1)
//   // expect({
//   //   name: 'Jeremy',
//   //   age: 36,
//   //   localation: 'Concord'
//   // }).toInclude({
//   //   age: 36
//   // })
// })