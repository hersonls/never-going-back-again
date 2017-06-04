import './App.css';
import React, { Component } from 'react';

import Header from './NewHeader';
import Sidebar from './Sidebar';
import Schedule from './Schedule';

import SCHEDULE_JSON from './schedule.json';

class App extends Component {
  constructor(props) {
    let currentEvent,
        schedule = SCHEDULE_JSON;

    if (this.schedule.events.length > 0) {
      this.currentEvent = this.schedule.events[0];
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Sidebar />
          <Schedule />
        </div>
      </div>
    )
  }
}

export default App;
