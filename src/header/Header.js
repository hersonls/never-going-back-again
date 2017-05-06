import React, {Component} from 'react';
import Card from '../card/Card';
import Tabs from '../tabs/Tabs';

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

export default Header;