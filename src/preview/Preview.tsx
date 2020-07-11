import React, { useContext } from 'react';
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { RootContext } from '../Provider';
import st from './Preview.module.css';
export const Preview: React.FC = () => {
  const { to, subject, body } = useContext(RootContext);
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>宛先</InputGroupText>
        </InputGroupAddon>
        <Input readOnly={true} value={to} />
        <InputGroupAddon addonType="append">
          <CopyToClipboard text={to}>
            <Button title="宛先をクリップボードにコピー">
              <FontAwesomeIcon icon={faClipboard} />
            </Button>
          </CopyToClipboard>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>件名</InputGroupText>
        </InputGroupAddon>
        <Input readOnly={true} value={subject} />
        <InputGroupAddon addonType="append">
          <CopyToClipboard text={subject}>
            <Button title="件名をクリップボードにコピー">
              <FontAwesomeIcon icon={faClipboard} />
            </Button>
          </CopyToClipboard>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <p className="lead">本文</p>
      <div className="border position-relative p-1">
        <pre>
          <code>{body}</code>
        </pre>
        <CopyToClipboard text={body}>
          <Button className={st.text_btn} title="本文をクリップボードにコピー">
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
