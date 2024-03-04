import React, { Component } from 'react'

class State2 extends Component {



  constructor(props) {
    super(props)
  
    this.state = {
       count : 100
    }
  }



  render() {

    // Destructuring
    const {count} = this.state

    return (
      <div>
        <h2> {count} </h2>
      </div>
    )
  }
}

export default State2;