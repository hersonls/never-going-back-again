import React, { Component } from 'react';

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
                <li key={`card-${item.identifier}`} className={`mdl-list__item mdl-list__item--three-line ${(item.image ? 'mdl-list__item--with-image' : '')}`}>
                  <span className="mdl-list__item-primary-content">
                    {item.image &&
                      <i className="material-icons mdl-list__item-avatar">person</i>
                    }

                    <span>{moment(item.time, 'hh:mm').format('HH:mm')}</span>
                    <span className="mdl-list__item-text-body">
                      {item.name}
                    </span>
                  </span>
                  <span className="mdl-list__item-secondary-action mdl-list__item-secondary-content">
                    <span className="mdl-list__item-secondary-info">Adicionar</span>
                    <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={item.identifier}>
                      <input onChange={this.onChangeHandler.bind(this)} type="checkbox" id={item.identifier} className="mdl-switch__input"  />
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
