import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import NavLink from 'NavLinks'

const Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault()
    var location = this.refs.search.value
    var encodedLocation = encodeURIComponent(location)

    if ( location.length > 0) {
      this.refs.search.value = ''
      // window.location.hash = '/?location=' + encodedLocation
      window.location.href = window.location.origin + '/?location=' + encodedLocation
    }
  },
  render: function (props) {
    return (
      <div className="top-bar">
        <div className="top-bar-left">

          <ul className="menu">
            <li><span className="menu-text">Weather App</span></li>
            <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/examples">Examples</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          {/* { props.children } */}
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search Weather by City"/>
              </li>
              <li>
                <input type="submit" className="button"  value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})

export default Nav;
