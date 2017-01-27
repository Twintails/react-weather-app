import React, { Component } from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

var Weather = React.createClass ({
  getInitialState: function (){
    return{
      isLoading: false,
    }
  },

  handleSearch: function (location) {
    var that = this

    this.setState({isLoading: true})
    // console.log(location)
    openWeatherMap.getTemp(location).then( function (temp) {
      that.setState({
        location: location,
        temp:temp,
        isLoading: false
      })
    }, function (errorMessage) {
      console.log('Search Error: ', errorMessage)
      that.setState({
        isLoading: false
      })
    })
  },

  render: function() {
    var{isLoading, temp, location} = this.state

    function renderMessage(){
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      } else {
        return <h3>Enter a location</h3>
      }
    }

    return (
      <div>
        <p>Wonderful Weather Widget</p>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather
