import React, { Component } from 'react';
import moment from 'moment';

// TODO: remove localStorage library from dev dependencies

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: JSON.parse(localStorage.getItem('selected')) || [],
      items: Object.values(this.props.area.items)
    }
}

  onChangeHandler(event) {
    let selectorValue = event.target.value;
    let selectorKey = event.target.id;
    let isChecked = event.target.checked;

    if (isChecked) {
      this.addItem(selectorKey, selectorValue, this.state.selectedItems);
    } else {
      this.removeItem(selectorKey, selectorValue, this.state.selectedItems);
    }

  }

  addItem(key, value, selectedItems) { 
    console.log('is checked', key, value, selectedItems);
  }

  removeItem(key, value, selectedItems) {
    console.log('is not checked', key, value, selectedItems);
  }

  slugfy(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

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
                <li id={index} key={index} className={"mdl-list__item mdl-list__item--three-line" + (item.image ? 'mdl-list__item--with-image' : '')}>
                  <span className="mdl-list__item-primary-content">
                    {item.image && 
                      <i className="material-icons mdl-list__item-avatar">person</i>
                    }

                    <span>{moment(this.props.schedule.date + ' ' + item.time, 'YYYY/MM/DD HH:mm:SS').format('HH:mm')}</span>
                    <span className="mdl-list__item-text-body">
                      {item.name}
                    </span>
                  </span>
                  <span className="mdl-list__item-secondary-action mdl-list__item-secondary-content">
                    <span className="mdl-list__item-secondary-info">Adicionar</span>
                    <label className="mdl-switch mdl-js-switch mdl-js-ripple-effect" htmlFor={"list-switch-" + this.slugfy(this.props.area.name) + '-' + moment(this.props.schedule.date + ' ' + item.time, 'YYYY/MM/DD HH:mm:SS').format('YYYY-MM-DD--HH-mm')}>
                      <input onChange={(e) => this.onChangeHandler(e)} type="checkbox" id={"list-switch-" + this.slugfy(this.props.area.name) + '-' + moment(this.props.schedule.date + ' ' + item.time, 'YYYY/MM/DD HH:mm:SS').format('YYYY-MM-DD--HH-mm')} className="mdl-switch__input"  />
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
