import React, { useCallback, useContext, useState, useEffect } from "react";
import { LS_KEYS } from "../utils";
import Textarea from "react-textarea-autosize";
import { extParam } from "../utils";
import { RootContext } from "../Provider";
let SavedStartHeader =
  localStorage.getItem(LS_KEYS.start_header) ||
  `xxさん

xxです。
テレワーク開始します。`;
let SavedEndHeader =
  localStorage.getItem(LS_KEYS.end_header) ||
  `xxさん

xxです。
テレワーク終了します。`;
if (extParam.get("name")) {
  SavedStartHeader =
    localStorage.getItem(LS_KEYS.start_header_ext) ||
    `${extParam.get("name")}です。
テレワーク開始します。`;
  SavedEndHeader =
    localStorage.getItem(LS_KEYS.end_header_ext) ||
    `${extParam.get("name")}です。
テレワーク終了します。`;
}
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
    if (extParam.get("name")) {
      localStorage.setItem(LS_KEYS.start_header_ext, startHeader);
    } else {
      localStorage.setItem(LS_KEYS.start_header, startHeader);
    }
  }, [startHeader]);
  useEffect(() => {
    if (extParam.get("name")) {
      localStorage.setItem(LS_KEYS.end_header_ext, endHeader);
    } else {
      localStorage.setItem(LS_KEYS.end_header, endHeader);
    }
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
