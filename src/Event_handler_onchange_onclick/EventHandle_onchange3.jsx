// 3rd time practice of event handler with class component.

import React, { Component } from 'react'

class EventHandle_onchange3 extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       third: ''
    }
  }


  thRee = (e) => {
    this.setState({
      third: e.target.value
    })
  }



  render() {
    return (
      <div>
        <h2>
          {this.state.third}
        </h2>
        <input type="text" onChange={this.thRee}/>
      </div>
    )
  }
}



export default EventHandle_onchange3;