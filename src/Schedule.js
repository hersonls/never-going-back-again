import React, { Component } from 'react';
import Card from './NewCard';

class Schedule extends Component {
  render() {
    return (
      <main className="mdl-layout__content">
        {this.props.schedules.map((schedule, index) => {
          return (
            <section key={index}
                     id={`scroll-tab-${index}`}
                     className={`mdl-layout__tab-panel ${(index === 0 ? 'is-active' : '')}`}>
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
