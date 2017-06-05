import './App.css';
import React, { Component } from 'react';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Schedule from './schedule/Schedule';

import SCHEDULE_JSON from './schedule.json';

class App extends Component {
  constructor(props) {
    super(props);

    localStorage.setItem('schedule', JSON.stringify(SCHEDULE_JSON));

    let storedSchedule = Object.assign({}, SCHEDULE_JSON),
        favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

    if (favorites.length === 0) {
      this.state = {'schedule': storedSchedule};
    } else {
      favorites.map((favorited) => {
        storedSchedule.events.map((event) => {
          event.schedules.map((schedule) => {
            schedule.areas.map((area) => {
              area.items.map((item) => {
                if (item.identifier == favorited.identifier) {
                  item['favorite'] = true;
                }
              });
            });
          });
        });
      });
      this.state = {'schedule': storedSchedule};
    }

    if (this.state.schedule.events.length > 0) {
      this.state['currentEvent'] = this.state.schedule.events[0];
    }
  }

  setFavorite(e) {
    const isChecked = e.target.checked,
          identifier = e.target.id;

    let favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

    if (e.target.checked) {
      favorites.push({'identifier': identifier});
    } else {
      favorites = favorites.filter((favorited) => favorited.identifier != identifier);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    let currentEvent = Object.assign({}, this.state.currentEvent);
    currentEvent.schedules.map((schedule) => {
      schedule.areas.map((area) => {
        area.items.map((item) => {
          if (item.identifier == identifier) {
            item['favorite'] = e.target.checked;
          }
        });
      });
    });
    this.setState({'currentEvent': currentEvent});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header currentEvent={this.state.currentEvent} />
          <Sidebar events={this.state.schedule.events} />
          <Schedule schedules={this.state.currentEvent.schedules} favoriteHandler={this.setFavorite.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;
