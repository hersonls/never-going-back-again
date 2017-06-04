import './App.css';
import React, { Component } from 'react';

import Header from './header/NewHeader';
import Sidebar from './sidebar/Sidebar';
import Schedule from './schedule/Schedule';

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
