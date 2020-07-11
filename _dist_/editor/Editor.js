import React from '/web_modules/react.js';
import { ToEditor } from './ToEditor.js';
import { TypeSelector } from './TypeSelector.js';
import { SubjectEditor } from './SubjectEditor.js';
import { BodyEditor } from './BodyEditor.js';
export const Editor = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "d-none d-sm-block"
  }, /*#__PURE__*/React.createElement(ToEditor, null), /*#__PURE__*/React.createElement(TypeSelector, null), /*#__PURE__*/React.createElement(SubjectEditor, null)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(BodyEditor, null));
};