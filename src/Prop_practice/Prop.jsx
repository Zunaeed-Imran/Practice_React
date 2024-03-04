import React, { Component } from 'react'

export default class Prop extends Component {
  render() {
    return (
      <div>
        {this.props.test}
      </div>
    )
  }
}

// we need to use class for prop without it won't work i see as long form now.