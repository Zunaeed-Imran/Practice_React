import React, { Component } from 'react'

class State3 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       testing : 20
    }
  }

  
  
  render() {

    // function for change number value
    const cHange = () => {
      this.setState({testing: this.state.testing+6})
    }

    // Destructuring
    const {testing} = this.state


    return (
      <div>
        <h2>{testing}</h2>
        <button onClick={cHange}>Add Plus + 6</button>
      </div>
    )
  }
}



export default State3;