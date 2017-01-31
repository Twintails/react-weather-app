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

    this.setState({
      isLoading: true,
      temp: undefined,
      location: undefined,
      errorMessage: undefined
    })
    // console.log(location)
    openWeatherMap.getTemp(location).then( function (temp) {
      that.setState({
        temp: temp,
        location: location,
        isLoading: false,
      })
      // window.location.hash = '/?location=' + location
    }, function (e) {
      console.log('Search Error: ', e.message)
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  },

  componentDidMount: function () {
    var location = this.props.location.query.location
    if (location && location.length > 0) {
      this.handleSearch(location)
      // window.location = '/?location=' + location
    }
  },
  componentWillReceiveProps: function (nextProps) {

    var location = nextProps.location.query.location
    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location = '/?location=' + location
    }
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
