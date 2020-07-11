import React, { useCallback, useState, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import { LS_KEYS } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Textarea from "react-textarea-autosize";
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
      const value = evt.target.value || "";
      setContentLabel(value);
      localStorage.setItem(LS_KEYS.content_label, value);
    },
    [setContentLabel]
  );

  const handleTextChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = evt.target.value || "";
      setContentText(value);
      localStorage.setItem(LS_KEYS.content_text, value);
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
        <Textarea
          value={contentText}
          minRows={5}
          className="form-control"
          placeholder={ContentSample}
          onChange={handleTextChange}
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
