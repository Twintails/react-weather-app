import React, { Component } from 'react'

const ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'))
    modal.open()
  },
  render: function () {
    const {title, message} =  this.props

    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <button className="button hollow" data-close="">Allrighty!</button>
      </div>
    )
  }
})

export default ErrorModal
