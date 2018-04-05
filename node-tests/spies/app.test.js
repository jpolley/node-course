const expect = require('expect')
const rewire = require('rewire')

let app = rewire('./app')

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('should call the spy correctly', () => {
    let spy = expect.createSpy()
    spy('Jeremy', 36)
    expect(spy).toHaveBeenCalledWith('Jeremy', 36)
  })

  it('should call saveUser w/ user object', () => {
    let email = 'jeremy@example.com'
    let password = 'Super$ecret'

    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})