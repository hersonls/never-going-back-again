import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';

import SCHEDULE_JSON from './schedule.json';

console.log(SCHEDULE_JSON)

class App extends Component {
  currentEvent;
  schedule = SCHEDULE_JSON;

  constructor(props) {
    super(props);

    // Define first event the current events
    if (this.schedule.events.length > 0) {
      this.currentEvent = this.schedule.events[0];
    }
  }

  render() {
    return (
      <div className="App">
        <Header events={this.schedule.events} currentEvent={this.currentEvent} />
      </div>
    );
  }
}

export default App;
