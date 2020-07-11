import React, { useCallback, useContext } from '/web_modules/react.js';
import { InputGroup, InputGroupAddon, InputGroupText, FormGroup, Label, Input } from '/web_modules/reactstrap.js';
import { RootContext } from '../Provider.js';
export const TypeSelector = () => {
  const {
    type,
    dispatch
  } = useContext(RootContext);
  const handleChange = useCallback(evt => {
    dispatch({
      type: 'SetType',
      payload: evt.target.value
    });
  }, [dispatch]);
  return /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend"
  }, /*#__PURE__*/React.createElement(InputGroupText, null, "\u7A2E\u5225")), /*#__PURE__*/React.createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/React.createElement(FormGroup, {
    check: true,
    inline: true
  }, /*#__PURE__*/React.createElement(Label, {
    check: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "Start",
    name: "type",
    type: "radio",
    onChange: handleChange,
    defaultChecked: type === 'Start'
  }), "\u696D\u52D9\u958B\u59CB")), /*#__PURE__*/React.createElement(FormGroup, {
    check: true,
    inline: true
  }, /*#__PURE__*/React.createElement(Label, {
    check: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: "End",
    name: "type",
    type: "radio",
    onChange: handleChange,
    defaultChecked: type === 'End'
  }), "\u696D\u52D9\u7D42\u4E86"))));
};