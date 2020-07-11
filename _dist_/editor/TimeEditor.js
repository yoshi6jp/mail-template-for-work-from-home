import React, { useEffect, useContext, useState, useCallback } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { Input, Button, InputGroup, InputGroupAddon, Form, FormGroup } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { format } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/date-fns.js';
import { FontAwesomeIcon } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/@fortawesome/react-fontawesome.js';
import { faMinus, faPenNib } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/@fortawesome/free-solid-svg-icons.js';
import { RootContext } from '../Provider.js';
import { LS_KEYS } from '../utils.js';
import { ja } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/date-fns/locale.js';
const SavedStartTime = localStorage.getItem(LS_KEYS.start_time) || '08:40';
const SavedEndTime = localStorage.getItem(LS_KEYS.end_time) || '17:30';
const SavedTimeLabel = localStorage.getItem(LS_KEYS.time_label) || '[時間]';
export const TimeEditor = ({
  onChange
}) => {
  const {
    type
  } = useContext(RootContext);
  const [startTime, setStartTime] = useState(SavedStartTime);
  const [endTime, setEndTime] = useState(SavedEndTime);
  const [timeLabel, setTimeLabel] = useState(SavedTimeLabel);

  const handleLabelChange = e => {
    const value = e.target.value || '';
    setTimeLabel(value);
    localStorage.setItem(LS_KEYS.time_label, value);
  };

  const handleStartTimeChange = useCallback(e => {
    setStartTime(e.target.value || '');
  }, [setStartTime]);
  const handleEndTimeChange = useCallback(e => {
    setEndTime(e.target.value || '');
  }, [setEndTime]);
  const handleSetStartTimeNow = useCallback(() => {
    setStartTime(format(new Date(), 'HH:mm'));
  }, [setStartTime]);
  const handleSetEndTimeNow = useCallback(() => {
    setEndTime(format(new Date(), 'HH:mm'));
  }, [setEndTime]);
  useEffect(() => {
    onChange(`${timeLabel}

    ${format(new Date(), 'L/d(E)', {
      locale: ja
    })} ${startTime} - ${endTime}`);
  }, [timeLabel, startTime, endTime]);
  useEffect(() => {
    localStorage.setItem(LS_KEYS.start_time, startTime);
  }, [startTime]);
  useEffect(() => {
    if (type === 'Start') {
      localStorage.setItem(LS_KEYS.end_time, endTime);
    }
  }, [endTime, type]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form, {
    inline: true
  }, /*#__PURE__*/React.createElement(Input, {
    onChange: handleLabelChange,
    placeholder: "\u6642\u9593\u306E\u30E9\u30D9\u30EB",
    value: timeLabel
  })), /*#__PURE__*/React.createElement(Form, {
    inline: true
  }, /*#__PURE__*/React.createElement(FormGroup, {
    className: "w-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-4"
  }, format(new Date(), 'L/d(E)', {
    locale: ja
  })), /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Input, {
    type: "time",
    value: startTime,
    onChange: handleStartTimeChange
  }), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append",
    hidden: type !== 'Start'
  }, /*#__PURE__*/React.createElement(Button, {
    title: "\u73FE\u5728\u306E\u6642\u523B\u3092\u8A2D\u5B9A\u3059\u308B",
    onClick: handleSetStartTimeNow
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faPenNib
  })))), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faMinus,
    className: "mx-3"
  }), /*#__PURE__*/React.createElement(InputGroup, null, /*#__PURE__*/React.createElement(Input, {
    type: "time",
    value: endTime,
    onChange: handleEndTimeChange
  }), /*#__PURE__*/React.createElement(InputGroupAddon, {
    addonType: "append",
    hidden: type !== 'End'
  }, /*#__PURE__*/React.createElement(Button, {
    title: "\u73FE\u5728\u306E\u6642\u523B\u3092\u8A2D\u5B9A\u3059\u308B",
    onClick: handleSetEndTimeNow
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faPenNib
  })))))));
};