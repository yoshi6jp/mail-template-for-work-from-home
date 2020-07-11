import React, { useCallback, useContext, useState, useEffect } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { RootContext } from '../Provider.js';
import { LS_KEYS } from '../utils.js';
const SavedStartValue = localStorage.getItem(LS_KEYS.start_subject) || '[テレワーク]業務開始';
const SavedEndValue = localStorage.getItem(LS_KEYS.end_subject) || '[テレワーク]業務終了';
export const SubjectEditor = () => {
  const {
    type,
    dispatch
  } = useContext(RootContext);
  const [startSubject, setStartSubject] = useState(SavedStartValue);
  const [endSubject, setEndSubject] = useState(SavedEndValue);
  useEffect(() => {
    const subject = type === 'End' ? endSubject : startSubject;
    dispatch({
      type: 'SetSubject',
      payload: subject
    });
  }, [type, startSubject, endSubject]);
  const handleStartChange = useCallback(evt => {
    const value = evt.target.value || '';
    setStartSubject(value);
    localStorage.setItem(LS_KEYS.start_subject, value);
  }, [setStartSubject]);
  const handleEndChange = useCallback(evt => {
    const value = evt.target.value || '';
    setEndSubject(value);
    localStorage.setItem(LS_KEYS.end_subject, value);
  }, [setEndSubject]);
  return /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "prepend"
  }, /*#__PURE__*/React.createElement(InputGroupText, null, "\u4EF6\u540D")), /*#__PURE__*/React.createElement(Input, {
    hidden: type !== 'Start',
    require: true,
    key: "Start",
    defaultValue: startSubject,
    onChange: handleStartChange,
    placeholder: "\u696D\u52D9\u958B\u59CB\u6642\u306E\u4EF6\u540D\u3092\u5165\u529B"
  }), /*#__PURE__*/React.createElement(Input, {
    hidden: type !== 'End',
    required: true,
    key: "End",
    defaultValue: endSubject,
    onChange: handleEndChange,
    placeholder: "\u696D\u52D9\u7D42\u4E86\u6642\u306E\u4EF6\u540D\u3092\u5165\u529B"
  }));
};