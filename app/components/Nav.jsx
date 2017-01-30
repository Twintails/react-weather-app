import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import NavLink from 'NavLinks'

const Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault()
    console.log('Not yet wired up!');
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
                <input type="search" placeholder="Search Weather"/>
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
