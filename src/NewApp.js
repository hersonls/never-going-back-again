import './App.css';
import React, { Component } from 'react';

import Header from './NewHeader';
import Sidebar from './Sidebar';
import Schedule from './Schedule';

import SCHEDULE_JSON from './schedule.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.schedule = SCHEDULE_JSON;

    if (this.schedule.events.length > 0) {
      this.currentEvent = this.schedule.events[0];
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header currentEvent={this.currentEvent} />
          <Sidebar events={this.schedule.events} />
          <Schedule schedules={this.currentEvent.schedules} />
        </div>
      </div>
    )
  }
}

export default App;
