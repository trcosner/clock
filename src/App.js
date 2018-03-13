import React, { Component } from 'react';
import { subscribeToClock } from './api';
import { css } from 'react-emotion';
import Clock from './components/clock/Clock';

const appContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #4e54c8;
  background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);
  background: linear-gradient(to right, #8f94fb, #4e54c8);
`

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dayOfWeek: null,
      month: null,
      year: null,
      date: null,
      time: null
    };

    subscribeToClock((err, timestamp) => {
      const localTime =  new Date(timestamp);

      const dayOfWeek = localTime.getDay();
      const month = localTime.getMonth();
      const year = localTime.getFullYear();
      const date = localTime.getDate();
      const time = localTime.toLocaleTimeString('en-US');

      return this.setState({ dayOfWeek, month, year, date, time });
    });
  }

  render() {
    return (
      <div className={appContainer}>
          {this._renderClock()}
      </div>
    );
  }

  _renderClock(){
    if(
      !this.state.date ||
      !this.state.year ||
      !this.state.month ||
      !this.state.time ||
      !this.state.dayOfWeek
    ){ return null; }

    return (
      <Clock
        dayOfWeek={this.state.dayOfWeek}
        month={this.state.month}
        year={this.state.year}
        date={this.state.date}
        time={this.state.time} />
    );
  }
}

export default App;
