import React, { Component } from 'react';
import Card from '../card/NewCard';
import moment from 'moment';

class Schedule extends Component {
  componentWillMount() {
    // shame on me. :(
    this.favorites = [];
    this.props.schedules.map((schedule) => {
      schedule.areas.map((area) => {
        area.items.map((item) => {
          if (item.favorite) {
            this.favorites.push(item);
          }
        });
      });
    });
  }

  render() {
    return (
      <main className="mdl-layout__content">
        <section className={`mdl-layout__tab-panel ${(this.isFavoriteTab === true ? 'is-active' : '')}`} id="scroll-tab-favorites">
          <div className="page-content">
            <div className="mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Alertas</h2>
              </div>

              <div className="mdl-card__supporting-text">
                <ul className="demo-list-three mdl-list">
                  {this.favorites.map((item, index) => {
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
                            <input type="checkbox" id={item.identifier} className="mdl-switch__input" checked={item.favorite} onChange={this.props.favoriteHandler}/>
                          </label>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {this.props.schedules.map((schedule, index) => {
          return (
            <section key={index}
                     id={`scroll-tab-${index}`}
                     className={`mdl-layout__tab-panel ${(index === 0 ? 'is-active' : '')}`}>
              <div className="page-content">
                {schedule.areas.map((area, index) => {
                  return <Card key={index} schedule={schedule} area={area} onFavorite={this.props.favoriteHandler} />
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
