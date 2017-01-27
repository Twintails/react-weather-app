import axios from 'axios'

const OPEN_WEATHER_MAP_URL =
'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=fcb294f0d4b7072a829980d036970a37'

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location)
    let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestURL)
    .then(function(res){
      if (res.data.cod && res.data.message){
        throw new Error('Response Error ',res.data.message)
      } else {
        return Math.round(res.data.main.temp)
      }
    },function(res){
      throw new Error('Request Error ',res.data.message)
    })
  }
}
