import React, { useCallback, useContext, useRef } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import { readAsText } from "promise-file-reader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { RootContext } from "../Provider";

export const JsonFormConfig: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(RootContext);
  const handleDrop = useCallback(
    async (evt: React.DragEvent<HTMLInputElement>) => {
      evt.preventDefault();
      evt.stopPropagation();
      const file = evt.dataTransfer.files[0];
      if (file) {
        const text = await readAsText(file);
        try {
          const json = JSON.parse(text);
          const { FORM, UI, ENDPOINT } = json;
          if (FORM) {
            dispatch({ type: "SetSchema", payload: FORM });
          }
          if (UI) {
            dispatch({ type: "SetUiSchema", payload: UI });
          }
          if (ENDPOINT) {
            dispatch({ type: "SetSendUrl", payload: ENDPOINT });
          }
        } catch (e) {
          // format error
        }
      }
    },
    [dispatch]
  );
  const handleDragOver = useCallback(
    (evt: React.DragEvent<HTMLInputElement>) => {
      evt.preventDefault();
      evt.stopPropagation();
    },
    []
  );
  const handleClick = useCallback(async () => {
    const url = inputEl.current?.value;
    if (url) {
      const res = await fetch(url);
      const json = await res.json();
      const { FORM, UI, ENDPOINT } = json;
      console.log(ENDPOINT, json);
      if (FORM) {
        dispatch({ type: "SetSchema", payload: FORM });
      }
      if (UI) {
        dispatch({ type: "SetUiSchema", payload: UI });
      }
      if (ENDPOINT) {
        dispatch({ type: "SetSendUrl", payload: ENDPOINT });
      }
      if (FORM && ENDPOINT) {
        dispatch({ type: "SetConfigUrl", payload: url });
      }
    }
  }, [inputEl, dispatch]);
  return (
    <InputGroup className="mb-1">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>JSON Schema (experiment)</InputGroupText>
      </InputGroupAddon>
      <Input
        innerRef={inputEl}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        placeholder="本文の JSON Schema の URL を設定 "
      ></Input>
      <InputGroupAddon addonType="append">
        <Button onClick={handleClick}>
          <FontAwesomeIcon icon={faCloudDownloadAlt} />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};
