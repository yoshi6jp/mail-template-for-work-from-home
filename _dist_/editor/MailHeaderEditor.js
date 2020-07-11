import React, { useCallback, useContext, useState, useEffect } from '/web_modules/react.js';
import { LS_KEYS } from '../utils.js';
import { Input } from '/web_modules/reactstrap.js';
import { RootContext } from '../Provider.js';
const SavedStartHeader = localStorage.getItem(LS_KEYS.start_header) || `xxさん

xxです。
テレワーク開始します。`;
const SavedEndHeader = localStorage.getItem(LS_KEYS.end_header) || `xxさん

xxです。
テレワーク終了します。`;
export const MailHeaderEditor = ({
  onChange
}) => {
  const {
    type
  } = useContext(RootContext);
  const [startHeader, setStartHeader] = useState(SavedStartHeader);
  const [endHeader, setEndHeader] = useState(SavedEndHeader);
  useEffect(() => {
    switch (type) {
      case 'Start':
        {
          onChange(startHeader);
          break;
        }

      case 'End':
        {
          onChange(endHeader);
          break;
        }
    }
  }, [type, startHeader, endHeader, onChange]);
  useEffect(() => {
    localStorage.setItem(LS_KEYS.start_header, startHeader);
  }, [startHeader]);
  useEffect(() => {
    localStorage.setItem(LS_KEYS.end_header, endHeader);
  }, [endHeader]);
  const handleStartChange = useCallback(evt => {
    setStartHeader(evt.target.value);
  }, [setStartHeader]);
  const handleEndChange = useCallback(evt => {
    setEndHeader(evt.target.value);
  }, [setEndHeader]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    className: "h-md",
    hidden: type !== 'Start',
    key: "start",
    type: "textarea",
    defaultValue: startHeader,
    onChange: handleStartChange,
    placeholder: "\u958B\u59CB\u7528\u306E\u672C\u6587\u306E\u30D8\u30C3\u30C0\u30FC"
  }), /*#__PURE__*/React.createElement(Input, {
    className: "h-md",
    hidden: type !== 'End',
    key: "end",
    type: "textarea",
    defaultValue: endHeader,
    onChange: handleEndChange,
    placeholder: "\u7D42\u4E86\u7528\u306E\u672C\u6587\u306E\u30D8\u30C3\u30C0\u30FC"
  }));
};