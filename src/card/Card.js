import React, { Component } from 'react';
import moment from 'moment';

class Card extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      selectedItems: localStorage.getItem('selected') ? JSON.parse(localStorage.getItem('selected')) : [],
      items: Object.values(this.props.area.items)
    }
}

  onChangeHandler(event) {
    let item = this.state.items.find(item => item.identifier == event.target.id),
        selectedItems = this.state.selectedItems.slice();

    if (event.target.checked) {
      this.addItem(item, selectedItems);
    } else {
      this.removeItem(item, selectedItems);
    }

  }

  updateStorage(selectedItems) {
    localStorage.setItem('selected', JSON.stringify(selectedItems));
    this.setState({'selectedItems': selectedItems});
  }

  addItem(item, selectedItems) {
    if (selectedItems.find(i => i.identifier == item.identifier))  return

    selectedItems.push(item);
    this.updateStorage(selectedItems);
  }

  removeItem(item, selectedItems) {
    selectedItems = selectedItems.filter(i => i.identifier != item.identifier);
    this.updateStorage(selectedItems);
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
