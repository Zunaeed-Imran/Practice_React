// we will use class component in this practice file.
// we will practice onChange event in this practice file. 

import React, { Component } from 'react';

class Event_handler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: '',
    };
    this.cHange = this.cHange.bind(this);
  }

  cHange(e) {
    this.setState({
      change: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter any text"
          onChange={this.cHange}
        />
        <p>{this.state.change}</p>
      </div>
    );
  }
}

export default Event_handler;
