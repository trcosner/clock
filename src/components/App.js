import React, { Component } from 'react';
import { css } from 'react-emotion';
import io from 'socket.io-client';
import appconfig from 'config/appConfig';
import { observer, inject } from "mobx-react";
import Clock from 'components/Clock';

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

const socket =  io(appconfig.socketHost)

const App = inject("time")(observer(class App extends Component {

  componentDidMount(){
    socket.emit('subscribeToClock', 1000);
    socket.on('clock', timestamp => {
      return this.props.time.setTimestamp(timestamp);
    });
  }

  render() {
    return (
      <div className={appContainer}>
        <Clock
          dayOfWeek={this.props.time.local.dayOfWeek}
          month={this.props.time.local.month}
          year={this.props.time.local.year}
          date={this.props.time.local.date}
          time={this.props.time.local.time} />
      </div>
    );
  }
}));

export default App;
