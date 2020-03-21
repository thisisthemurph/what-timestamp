import React, { Component } from 'react';
import './TimeInput.scss';

class TimeInput extends Component {

  componentDidMount() {
    setInterval(() => {
      if (this.props.autoUpdate) {
        this.props.setOffsetToNow()
      }
    }, 1000)
  }

  render() {
    return (
      <div className='input-container'>
        <input
          type='number'
          id='time-input'
          value={this.props.timestamp}
          onChange={this.props.timeChange}
        />
      </div>
    )
  }
}

export default TimeInput;
