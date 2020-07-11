import React, { useCallback, useState, useEffect } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { Input, Form, Button } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { LS_KEYS } from '../utils.js';
import { FontAwesomeIcon } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/@fortawesome/react-fontawesome.js';
import { faTimesCircle } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/@fortawesome/free-solid-svg-icons.js';
import st from './MailContentEditor.module.css.proxy.js';
const ContentSample = `例
- AAAの作業
- BBBの作業
- CCCの作業
`;
const SavedContentLabel = localStorage.getItem(LS_KEYS.content_label) || '[作業内容]';
const SavedContentText = localStorage.getItem(LS_KEYS.content_text) || '';
export const MailContentEditor = ({
  onChange
}) => {
  const [contentLabel, setContentLabel] = useState(SavedContentLabel);
  const [contentText, setContentText] = useState(SavedContentText);
  const handleLabelChange = useCallback(evt => {
    setContentLabel(evt.target.value);
  }, [setContentLabel]);
  const handleTextChange = useCallback(evt => {
    setContentText(evt.target.value);
  }, [setContentText]);
  const handleClearText = useCallback(() => {
    setContentText('');
  }, [setContentText]);
  useEffect(() => {
    onChange(`${contentLabel}

${contentText}`);
  }, [contentLabel, contentText]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form, {
    inline: true
  }, /*#__PURE__*/React.createElement(Input, {
    onChange: handleLabelChange,
    value: contentLabel
  })), /*#__PURE__*/React.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/React.createElement(Input, {
    onChange: handleTextChange,
    className: "h-md",
    type: "textarea",
    placeholder: ContentSample,
    value: contentText
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleClearText,
    size: "sm",
    title: "\u5185\u5BB9\u3092\u6D88\u53BB",
    color: "white",
    outline: true,
    className: st.clear_btn
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTimesCircle
  }))));
};