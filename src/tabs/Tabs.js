import React, { Component } from 'react';
import moment from 'moment';

class Tabs extends Component {
  render() {
    return (
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#scroll-tab-favorites" className="mdl-layout__tab">Alertas</a>
        {this.props.schedules.map((item, index) => {
          return (
            <a key={index} href={`#scroll-tab-${index}`} className={`mdl-layout__tab ${(index === 0 ? 'is-active': '')}`}>
              {moment(item.date, 'YYYY/MM/DD').format('DD/MM')}
            </a>
          )
        })}
      </div>
    );
  }
}

export default Tabs;
