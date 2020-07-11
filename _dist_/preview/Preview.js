import React, { useContext } from '/web_modules/react.js';
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from '/web_modules/reactstrap.js';
import { FontAwesomeIcon } from '/web_modules/@fortawesome/react-fontawesome.js';
import { faClipboard } from '/web_modules/@fortawesome/free-solid-svg-icons.js';
import CopyToClipboard from '/web_modules/react-copy-to-clipboard.js';
import { RootContext } from '../Provider.js';
import st from './Preview.module.css.proxy.js';
export const Preview = () => {
  const {
    to,
    subject,
    body
  } = useContext(RootContext);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend"
  }, /*#__PURE__*/React.createElement(InputGroupText, null, "\u5B9B\u5148")), /*#__PURE__*/React.createElement(Input, {
    readOnly: true,
    value: to
  }), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append"
  }, /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: to
  }, /*#__PURE__*/React.createElement(Button, {
    title: "\u5B9B\u5148\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faClipboard
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend"
  }, /*#__PURE__*/React.createElement(InputGroupText, null, "\u4EF6\u540D")), /*#__PURE__*/React.createElement(Input, {
    readOnly: true,
    value: subject
  }), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append"
  }, /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: subject
  }, /*#__PURE__*/React.createElement(Button, {
    title: "\u4EF6\u540D\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faClipboard
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u672C\u6587"), /*#__PURE__*/React.createElement("div", {
    className: "border position-relative p-1"
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, body)), /*#__PURE__*/React.createElement(CopyToClipboard, {
    text: body
  }, /*#__PURE__*/React.createElement(Button, {
    className: st.text_btn,
    title: "\u672C\u6587\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faClipboard
  })))));
};