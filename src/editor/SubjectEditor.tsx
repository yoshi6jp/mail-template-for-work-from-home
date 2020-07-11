import React, { useCallback, useContext, useState, useEffect } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { RootContext } from "../Provider";
import { LS_KEYS } from "../utils";
const SavedStartValue =
  localStorage.getItem(LS_KEYS.start_subject) || "[テレワーク]業務開始";
const SavedEndValue =
  localStorage.getItem(LS_KEYS.end_subject) || "[テレワーク]業務終了";
export const SubjectEditor: React.FC = () => {
  const { type, dispatch } = useContext(RootContext);
  const [startSubject, setStartSubject] = useState(SavedStartValue);
  const [endSubject, setEndSubject] = useState(SavedEndValue);
  useEffect(() => {
    const subject = type === "End" ? endSubject : startSubject;
    dispatch({ type: "SetSubject", payload: subject });
  }, [type, startSubject, endSubject, dispatch]);

  const handleStartChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value || "";
      setStartSubject(value);
      localStorage.setItem(LS_KEYS.start_subject, value);
    },
    [setStartSubject]
  );

  const handleEndChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const value = evt.target.value || "";
      setEndSubject(value);
      localStorage.setItem(LS_KEYS.end_subject, value);
    },
    [setEndSubject]
  );

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>件名</InputGroupText>
      </InputGroupAddon>
      <Input
        hidden={type !== "Start"}
        require={true}
        key="Start"
        defaultValue={startSubject}
        onChange={handleStartChange}
        placeholder="業務開始時の件名を入力"
      />
      <Input
        hidden={type !== "End"}
        required={true}
        key="End"
        defaultValue={endSubject}
        onChange={handleEndChange}
        placeholder="業務終了時の件名を入力"
      />
    </InputGroup>
  );
};
