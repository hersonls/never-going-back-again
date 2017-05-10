import React, { Component } from 'react';
import moment from 'moment';

class Card extends Component {
  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.area.name}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="demo-list-three mdl-list">
            {this.props.area.items.map((item, index) => {
              return (
                <li key={index} className="mdl-list__item mdl-list__item--three-line">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-avatar"></i>
                    <span>{moment(this.props.schedule.date + ' ' + item.time, 'YYYY/MM/DD HH:mm:SS').format('HH:mm')}</span>
                    <span className="mdl-list__item-text-body">
                      {item.name}
                    </span>
                  </span>
                  <span className="mdl-list__item-secondary-action">
                    <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={"list-switch-" + moment(this.props.schedule.date + ' ' + item.time, 'YYYY/MM/DD HH:mm:SS').format('HH-mm')}>
                      <input type="checkbox" id={"list-switch-" + moment(this.props.schedule.date + ' ' + item.time, 'YYYY/MM/DD HH:mm:SS').format('HH-mm')} className="mdl-switch__input"  />
                    </label>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
