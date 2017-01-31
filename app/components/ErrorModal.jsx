import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

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
    const {title, message} =  this.props
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <button className="button hollow" data-close="">Allrighty!</button>
      </div>
    )

    var $modal = $(ReactDOMServer.renderToString(modalMarkup))
    $(ReactDOM.findDOMNode(this)).html($modal)

    const modal = new Foundation.Reveal($('#error-modal'))

    modal.open()
  },
  render: function () {
    return (
      <div>
      </div>
    )
  }
})

export default ErrorModal
