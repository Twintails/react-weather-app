import React, { Component } from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import ErrorModal from 'ErrorModal'
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
        temp: temp,
        location: location,
        isLoading: false,
        errorMessage: undefined
      })
    }, function (e) {
      console.log('Search Error: ', e.message)
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  },

  render: function() {
    var{isLoading, temp, location, errorMessage} = this.state

    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center" >Fetching Weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1>Search Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
})

module.exports = Weather
