import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Dia 1</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <ul className="demo-list-three mdl-list">
            <li className="mdl-list__item mdl-list__item--three-line">
              <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-avatar">person</i>
                <span>Talk 1</span>
                <span className="mdl-list__item-text-body">
                  Bryan Cranston played the role of Walter in Breaking Bad. He is also known
                  for playing Hal in Malcom in the Middle.
                </span>
              </span>
              <span className="mdl-list__item-secondary-content">
                <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
              </span>
            </li>
          </ul>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    );
  }
}

export default Card;