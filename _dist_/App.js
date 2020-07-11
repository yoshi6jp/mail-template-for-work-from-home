import React from '/web_modules/react.js';
import './App.css.proxy.js';
import { Header } from './Header.js';
import { Body } from './Body.js';
import { Provider } from './Provider.js';

const App = () => {
  return /*#__PURE__*/React.createElement(Provider, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Body, null)));
};

export default App;