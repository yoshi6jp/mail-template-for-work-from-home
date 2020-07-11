import React, { useState, useContext, useEffect } from 'react';
import { MailHeaderEditor } from './MailHeaderEditor';
import { TimeEditor } from './TimeEditor';
import { MailContentEditor } from './MailContentEditor';
import { MailFooterEditor } from './MailFooterEditor';
import { RootContext } from '../Provider';
export const BodyEditor: React.FC = () => {
  const { dispatch } = useContext(RootContext);
  const [header, setHeader] = useState('');
  const [timeText, setTimeText] = useState('');
  const [content, setContent] = useState('');
  const [footer, setFooter] = useState('');
  useEffect(() => {
    const body = `${header}

${timeText}    

${content}

${footer}`;
    dispatch({ type: 'SetBody', payload: body });
  }, [header, timeText, content, footer]);

  return (
    <div>
      <div className="d-none d-sm-block">
        <p className="lead">本文</p>
        <MailHeaderEditor onChange={setHeader} />
        <TimeEditor onChange={setTimeText} />
      </div>
      <MailContentEditor onChange={setContent} />
      <div className="d-none d-sm-block">
        <MailFooterEditor onChange={setFooter} />
      </div>
    </div>
  );
};
