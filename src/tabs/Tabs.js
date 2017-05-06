import React, { Component } from 'react';

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

export default Tabs;