import React, { Component } from 'react'
import Nav from 'Nav'

const Main = (props) => {
  return (
    <div className="main-content">
      <Nav/>
      <h2>{ props.route.title }</h2>
      {props.children}
    </div>
  )
}

export default Main;
