import React, { useCallback, useContext, useState, useEffect } from "react";
import { LS_KEYS } from "../utils";
import Textarea from "react-textarea-autosize";
import { RootContext } from "../Provider";
const SavedStartHeader =
  localStorage.getItem(LS_KEYS.start_header) ||
  `xxさん

xxです。
テレワーク開始します。`;
const SavedEndHeader =
  localStorage.getItem(LS_KEYS.end_header) ||
  `xxさん

xxです。
テレワーク終了します。`;
export const MailHeaderEditor: React.FC<{
  onChange: (val: string) => void;
}> = ({ onChange }) => {
  const { type } = useContext(RootContext);
  const [startHeader, setStartHeader] = useState(SavedStartHeader);
  const [endHeader, setEndHeader] = useState(SavedEndHeader);
  useEffect(() => {
    switch (type) {
      case "Start": {
        onChange(startHeader);
        break;
      }
      case "End": {
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
  const handleStartChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      setStartHeader(evt.target.value);
    },
    [setStartHeader]
  );

  const handleEndChange = useCallback(
    (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEndHeader(evt.target.value);
    },
    [setEndHeader]
  );
  return (
    <>
      <Textarea
        className="form-control"
        hidden={type !== "Start"}
        defaultValue={startHeader}
        onChange={handleStartChange}
        placeholder="開始用の本文のヘッダー"
        minRows={3}
      />
      <Textarea
        className="form-control"
        hidden={type !== "End"}
        defaultValue={endHeader}
        onChange={handleEndChange}
        placeholder="終了用の本文のヘッダー"
        minRows={3}
      />
    </>
  );
};
