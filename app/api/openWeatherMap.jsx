import axios from 'axios'
import apiKey from 'json!apiKey'

const OPEN_WEATHER_MAP_URL =
'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + apiKey.OWMapiKey

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location)
    let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestURL)
    .then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error('Response Error ', res.data.message)
      } else {
        return Math.round(res.data.main.temp)
      }
    },function(err){
      // throw new Error('Request Error ', err.res.data.message)
      throw new Error('Unable to fetch weather for that location.')
    })
  }
}
