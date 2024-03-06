import React, { Component } from 'react'





class EventHandler2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ChangeValue : ''
    };
  }

  chAnging = (e) => {
    this.setState({
      ChangeValue: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.ChangeValue}
        </h1>
          <input type="text" onChange={this.chAnging} />
      </div>
    );
  }
}


export default EventHandler2;