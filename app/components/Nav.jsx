import React, { Component } from 'react'
import { IndexLink } from 'react-router'
import NavLink from 'NavLinks'

class Nav extends Component {
  render() {
    return (
      <div className="navigation"><header>
          <span className="icn-logo"><i className="material-icons">Logo</i></span>
          <ul className="main-nav">
            <li><IndexLink to="/" activeClassName="active">Get Weather</IndexLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/examples">Examples</NavLink></li>
          </ul>
        </header>
        { this.props.children }
      </div>
    );
  }
}

export default Nav;
