import React, { Component } from 'react'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>A weather widget built on React; based on the Udemy Course: "The Complete React Web app developer".</p>
      <h2>Dev Tooling</h2>
      <ul>
        <li><a href="//facebook.github.io/react">React</a> - React Library</li>
        <li><a href="//webpack.github.io/">Webpack</a> - Build and Bundle tooling + Dev Server</li>
        <li><a href="//heroku.com">Heroku</a> - Heroku CLI and Git for Bundle hosting</li>
        <li><a href="//openweathermap.org">Open Weather Map</a> - OWM API for weather search by city name</li>
      </ul>
    </div>
  )
}

export default About
