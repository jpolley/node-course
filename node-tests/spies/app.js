let db = require('./db')

module.exports.handleSignup = (email, password) => {
  // Check if email exists
  db.saveUser({email, password})
  // Send the welcome email
}