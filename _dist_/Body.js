import React from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { Container, Col, Row } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { Editor } from './editor/Editor.js';
import { Preview } from './preview/Preview.js';
import st from './Body.module.css.proxy.js';
export const Body = () => {
  return /*#__PURE__*/React.createElement(Container, {
    className: st.top
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: "12",
    lg: "6"
  }, /*#__PURE__*/React.createElement(Editor, null)), /*#__PURE__*/React.createElement(Col, {
    md: "12",
    lg: "6",
    className: "d-none d-sm-block"
  }, /*#__PURE__*/React.createElement(Preview, null))));
};