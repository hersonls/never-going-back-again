import React, { Component } from 'react';

import Card from 'NewCard';

class Schedule extends Component {
  render() {
    return (
      <main className="mdl-layout__content">
        {this.props.currentEvent.schedules.map((schedule, index) => {
          return (
            <section key={index} className={`mdl-layout__tab-panel ${(index === 0 ? 'is-active' : '')}`} id={`scroll-tab-${index}`}>
              <div className="page-content">
                {schedule.areas.map((area, index) => {
                  return <Card key={index} schedule={schedule} area={area} />
                })}
              </div>
            </section>
          )
        })}
      </main>
    )
  }
}

export default Schedule;
