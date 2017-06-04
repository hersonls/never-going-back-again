import React, {Component} from 'react';
import Card from '../card/Card';
import Tabs from '../tabs/Tabs';

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.props.currentEvent.name}</span>
          </div>

          <Tabs schedules={this.props.currentEvent.schedules} />
        </header>

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

        <main className="mdl-layout__content">
          <section className={`mdl-layout__tab-panel ${(this.isFavoriteTab === true ? 'is-active' : '')}`} id="scroll-tab-favorites">
            <div className="page-content">
              <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">Alertas</h2>
                </div>

                <div className="mdl-card__supporting-text">
                  <p> Nenhum item adicionado.</p>
                </div>
              </div>

            </div>
          </section>

          {this.props.currentEvent.schedules.map((schedule, index) => {
            return (
              <section key={index} className={`mdl-layout__tab-panel ${(index === 0 ? 'is-active' : '')}`} id={`scroll-tab-${index}`}>
                <div className="page-content">
                  {schedule.areas.map((area, index) => {
                    return <Card key={index} schedule={schedule} area={area} />
                  })}
                </div>
              </section>
            )
          })}
        </main>
      </div>
    );
  }
}

export default Header;
