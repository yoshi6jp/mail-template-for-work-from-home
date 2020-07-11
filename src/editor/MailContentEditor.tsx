import React, { useCallback, useState, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import { LS_KEYS } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import st from "./MailContentEditor.module.css";
const ContentSample = `例
- AAAの作業
- BBBの作業
- CCCの作業
`;
const SavedContentLabel =
  localStorage.getItem(LS_KEYS.content_label) || "[作業内容]";
const SavedContentText = localStorage.getItem(LS_KEYS.content_text) || "";
export const MailContentEditor: React.FC<{
  onChange: (val: string) => void;
}> = ({ onChange }) => {
  const [contentLabel, setContentLabel] = useState(SavedContentLabel);
  const [contentText, setContentText] = useState(SavedContentText);
  const handleLabelChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setContentLabel(evt.target.value);
    },
    [setContentLabel]
  );

  const handleTextChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setContentText(evt.target.value);
    },
    [setContentText]
  );
  const handleClearText = useCallback(() => {
    setContentText("");
  }, [setContentText]);
  useEffect(() => {
    onChange(`${contentLabel}

${contentText}`);
  }, [contentLabel, contentText, onChange]);
  return (
    <div>
      <Form inline>
        <Input onChange={handleLabelChange} value={contentLabel} />
      </Form>
      <div className="position-relative">
        <Input
          onChange={handleTextChange}
          className="h-md"
          type="textarea"
          placeholder={ContentSample}
          value={contentText}
        />
        <Button
          onClick={handleClearText}
          size="sm"
          title="内容を消去"
          color="white"
          outline
          className={st.clear_btn}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
      </div>
    </div>
  );
};
