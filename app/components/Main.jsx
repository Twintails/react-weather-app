import React, { Component } from 'react'
import Nav from 'Nav'

class Main extends Component {
  render() {
    return (
      <div className="main-content">
        <Nav/>
        <h2>{ this.props.route.title }</h2>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
