import React, { Component } from 'react'

const WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center" >It's {temp} in {location}</h3>
    </div>
  )
}

module.exports = WeatherMessage
