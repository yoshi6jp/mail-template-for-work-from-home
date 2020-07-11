import React, { useState, useContext, useEffect } from '/web_modules/react.js';
import { MailHeaderEditor } from './MailHeaderEditor.js';
import { TimeEditor } from './TimeEditor.js';
import { MailContentEditor } from './MailContentEditor.js';
import { MailFooterEditor } from './MailFooterEditor.js';
import { RootContext } from '../Provider.js';
export const BodyEditor = () => {
  const {
    dispatch
  } = useContext(RootContext);
  const [header, setHeader] = useState('');
  const [timeText, setTimeText] = useState('');
  const [content, setContent] = useState('');
  const [footer, setFooter] = useState('');
  useEffect(() => {
    const body = `${header}

${timeText}    

${content}

${footer}`;
    dispatch({
      type: 'SetBody',
      payload: body
    });
  }, [header, timeText, content, footer]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "d-none d-sm-block"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u672C\u6587"), /*#__PURE__*/React.createElement(MailHeaderEditor, {
    onChange: setHeader
  }), /*#__PURE__*/React.createElement(TimeEditor, {
    onChange: setTimeText
  })), /*#__PURE__*/React.createElement(MailContentEditor, {
    onChange: setContent
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-none d-sm-block"
  }, /*#__PURE__*/React.createElement(MailFooterEditor, {
    onChange: setFooter
  })));
};