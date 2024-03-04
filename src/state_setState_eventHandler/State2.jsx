import React, { Component } from 'react'

export default class State2 extends Component {


constructor(props) {
  super(props)

  this.state = {
    test: 10,
    massege: 'this is your mark'
  }
}



  render() {

    // destructuring
    const {test} = this.state;
    const { massege } = this.state;

    const handleClick = () => {
      this.setState({
        test: this.state.test + 1
      })
    }

    return (
      <div>
        <h2>{test}</h2>
        <h3>{massege}</h3>
        <button onClick={handleClick}>
          Plus + 1
        </button>
      </div>
    )
  }
}
