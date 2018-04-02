// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     console.log(JSON.stringify(results, undefined, 2))
//   }
// })

const request = require('request')
const forecastApiKey = ''

request({
  url: `https://api.darksky.net/forecast/${forecastApiKey}/35.3493159,-80.62907109999999`,
  json: true
}, (error, response, body) => {
  if(!error && response.statusCode === 200) {
    console.log(`Current temperature is ${body.currently.temperature} degrees`)    

  } else {
    console.log('Unable to fetch weather.')
  }
})