import React, { useCallback, useContext, useEffect } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { InputGroupAddon, InputGroupText, InputGroup, Input } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { RootContext } from '../Provider.js';
import { LS_KEYS } from '../utils.js';
const SavedValue = localStorage.getItem(LS_KEYS.to) || '';
export const ToEditor = () => {
  const {
    dispatch
  } = useContext(RootContext);
  const handleChange = useCallback(ev => {
    const value = ev.target.value || '';
    dispatch({
      type: 'SetTo',
      payload: value
    });
    localStorage.setItem(LS_KEYS.to, value);
  }, [dispatch]);
  useEffect(() => {
    dispatch({
      type: 'SetTo',
      payload: SavedValue
    });
  }, []);
  return /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend"
  }, /*#__PURE__*/React.createElement(InputGroupText, null, "\u5B9B\u5148")), /*#__PURE__*/React.createElement(Input, {
    required: true,
    type: "email",
    defaultValue: SavedValue,
    onChange: handleChange,
    placeholder: "\u4F8B: report@example.com"
  }));
};