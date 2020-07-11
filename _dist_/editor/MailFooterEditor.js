import React, { useCallback, useEffect } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { Input } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { LS_KEYS } from '../utils.js';
const SavedText = localStorage.getItem(LS_KEYS.footer) || `以上です。`;
export const MailFooterEditor = ({
  onChange
}) => {
  const handleChange = useCallback(evt => {
    const value = evt.target.value || '';
    onChange(value);
    localStorage.setItem(LS_KEYS.footer, value);
  }, [onChange]);
  useEffect(() => {
    onChange(SavedText);
  }, []);
  return /*#__PURE__*/React.createElement(Input, {
    onChange: handleChange,
    defaultValue: SavedText,
    placeholder: "\u672C\u6587\u306E\u30D5\u30C3\u30BF\u30FC",
    className: "h-md",
    type: "textarea"
  });
};