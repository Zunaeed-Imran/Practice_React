import React, { Component } from 'react'

export default class Prop extends Component {

  render() {

    const { test } = this.props;

    return (
      <div>
        {test}
      </div>
    )
  }
}

// we need to use class for prop without it won't work i see as long form now.