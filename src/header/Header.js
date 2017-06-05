import React, { Component } from 'react';
import Tabs from '../tabs/Tabs';

class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.currentEvent.name}</span>
        </div>
        <Tabs schedules={this.props.currentEvent.schedules} />
      </header>
    )
  }
}

export default Header;
