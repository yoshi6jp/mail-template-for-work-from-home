import React, { useContext } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
import { Navbar, NavbarBrand, Button } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/reactstrap.js';
import { FontAwesomeIcon } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/@fortawesome/react-fontawesome.js';
import { faEnvelope } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/@fortawesome/free-solid-svg-icons.js';
import { RootContext } from './Provider.js';
export const Header = () => {
  const {
    to,
    subject,
    body
  } = useContext(RootContext);
  const href = `https://outlook.office.com/owa/?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&to=${to}&path=/mail/action/compose`;
  return /*#__PURE__*/React.createElement(Navbar, {
    dark: true,
    color: "dark",
    fixed: "top"
  }, /*#__PURE__*/React.createElement(NavbarBrand, null, "\u30C6\u30EC\u30EF\u30FC\u30AF\u7528\u306E\u30E1\u30FC\u30EB\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"), /*#__PURE__*/React.createElement(Button, {
    title: "[Experiment] Outlook on the web\u3067\u30E1\u30FC\u30EB\u3092\u4F5C\u6210",
    tag: "a",
    target: "_blank",
    href: href
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faEnvelope
  })));
};