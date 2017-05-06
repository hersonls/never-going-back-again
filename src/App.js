import React, { Component } from 'react';
import './App.css';


class Tabs extends Component {
  render() {
    return (
      <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
        <a href="#scroll-tab-1" className="mdl-layout__tab is-active">Tab 1</a>
        <a href="#scroll-tab-2" className="mdl-layout__tab">Tab 2</a>
        <a href="#scroll-tab-3" className="mdl-layout__tab">Tab 3</a>
        <a href="#scroll-tab-4" className="mdl-layout__tab">Tab 4</a>
        <a href="#scroll-tab-5" className="mdl-layout__tab">Tab 5</a>
        <a href="#scroll-tab-6" className="mdl-layout__tab">Tab 6</a>
      </div>
    );
  }
}


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

class Header extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
          </div>

          <Tabs />
        </header>

        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>

        <main className="mdl-layout__content">
          <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
            <div className="page-content">
              <Card />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-2">
            <div className="page-content">
              <Card />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-3">
            <div className="page-content">
              <Card />
            </div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-4">
            <div className="page-content"></div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-5">
            <div className="page-content"></div>
          </section>
          <section className="mdl-layout__tab-panel" id="scroll-tab-6">
            <div className="page-content"></div>
          </section>
        </main>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}


export default App;
