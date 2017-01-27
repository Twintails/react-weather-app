import React, { Component } from 'react'

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's {temp} in {location}</h3>
    </div>
  )
}

module.exports = WeatherMessage
