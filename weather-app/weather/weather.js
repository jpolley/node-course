const request = require('request')

const appConfig = require('.././appConfig')

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${appConfig.forecastApiKey}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast.io server.')
    } else if (response.statusCode === 404) {
      callback('Unable to fetch weather.')
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports.getWeather = getWeather
