import React, { Component, Fragment } from 'react';
import TimeInput from './components/TimeInput';
import TimeOutput from './components/TimeOutput';
import './App.scss';

class App extends Component {
  constructor() {
    super()

    this.state = {
      offset: Math.round(new Date().getTime() / 1000),
      autoUpdate: true
    }
  }

  onTimeChange = event => {
    this.setState({
      offset: +event.target.value,
      autoUpdate: false
    })
  }

  setOffsetToNow = () => {
    this.setState({ offset: Math.round(new Date().getTime() / 1000) })
  }

  /**
   * Attempts to converts the state.offset into a human readable timestamp
   * using the Unix epoch
   */
  getUnixDate() {
    // Number of seconds or nanoseconds since 1970
    const secsDate = new Date(Math.round(this.state.offset * 1000))
    const millDate = new Date(this.state.offset)

    return [
      { title: 'Seconds', value: secsDate.toUTCString() },
      { title: 'Milliseconds', value: millDate.toUTCString() }
    ]
  }

  /**
   * Attempts to converts the state.offset into a human readable timestamp
   * using the Cocoa epoch
   */
  getCocoaDate() {
    const cocoaUnixDiff = 978307200 * 1000

    const secsDate = new Date(cocoaUnixDiff + this.state.offset * 1000)
    const nanoDate = new Date(cocoaUnixDiff + Math.round(this.state.offset / 1_000_000))

    return [
      { title: 'Seconds', value: secsDate.toUTCString() },
      { title: 'Nanoseconds', value: nanoDate.toUTCString() }
    ]
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>What Timestamp?</h1>
          <TimeInput
            timestamp={this.state.offset}
            timeChange={this.onTimeChange}
            autoUpdate={this.state.autoUpdate}
            setOffsetToNow={this.setOffsetToNow}
          />
        </header>
        <div className='outputs'>
          <TimeOutput
            name='UNIX Timestamp (1970)'
            dates={this.getUnixDate()}
          />
          <TimeOutput
            name='Cocoa Timestamp (2001)'
            dates={this.getCocoaDate()}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
