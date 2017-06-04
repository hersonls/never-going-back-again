import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Eventos</span>
        <nav className="mdl-navigation">
          {this.props.events.map((event, index) => {
            return (
              <a key={index} className="mdl-navigation__link" href="">{event.name}</a>
            )
          })}
        </nav>
      </div>
    )
  }
}

export default Sidebar;
