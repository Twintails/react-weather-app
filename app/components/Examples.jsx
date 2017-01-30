import React, { Component } from 'react'
import { Link } from 'react-router'

const Examples = (props) => {
    return (
      <div>
        <h1>Examples</h1>
        <p>Here are a few examples to try out:</p>
        <ol>
          <li><Link to='/?location=Georgetown,tx'>Georgetown</Link></li>
          <li><Link to='/?location=Cowtown'>Cowtown</Link></li>
        </ol>
      </div>
  )
}

export default Examples
