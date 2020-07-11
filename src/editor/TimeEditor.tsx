import React, { useEffect, useContext, useState, useCallback } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup,
} from "reactstrap";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { RootContext } from "../Provider";
import { LS_KEYS } from "../utils";

import { ja } from "date-fns/locale";

const SavedStartTime = localStorage.getItem(LS_KEYS.start_time) || "08:40";
const SavedEndTime = localStorage.getItem(LS_KEYS.end_time) || "17:30";
const SavedTimeLabel = localStorage.getItem(LS_KEYS.time_label) || "[時間]";
export const TimeEditor: React.FC<{ onChange: (val: string) => void }> = ({
  onChange,
}) => {
  const { type } = useContext(RootContext);
  const [startTime, setStartTime] = useState(SavedStartTime);
  const [endTime, setEndTime] = useState(SavedEndTime);
  const [timeLabel, setTimeLabel] = useState(SavedTimeLabel);
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    setTimeLabel(value);
    localStorage.setItem(LS_KEYS.time_label, value);
  };

  const handleStartTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStartTime(e.target.value || "");
    },
    [setStartTime]
  );
  const handleEndTimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEndTime(e.target.value || "");
    },
    [setEndTime]
  );
  const handleSetStartTimeNow = useCallback(() => {
    setStartTime(format(new Date(), "HH:mm"));
  }, [setStartTime]);

  const handleSetEndTimeNow = useCallback(() => {
    setEndTime(format(new Date(), "HH:mm"));
  }, [setEndTime]);

  useEffect(() => {
    onChange(`${timeLabel}

    ${format(new Date(), "L/d(E)", { locale: ja })} ${startTime} - ${endTime}`);
  }, [timeLabel, startTime, endTime, onChange]);
  useEffect(() => {
    localStorage.setItem(LS_KEYS.start_time, startTime);
  }, [startTime]);
  useEffect(() => {
    if (type === "Start") {
      localStorage.setItem(LS_KEYS.end_time, endTime);
    }
  }, [endTime, type]);
  return (
    <div>
      <Form inline>
        <Input
          onChange={handleLabelChange}
          placeholder="時間のラベル"
          value={timeLabel}
        />
      </Form>
      <Form inline>
        <FormGroup className="w-100">
          <div className="mx-4">
            {format(new Date(), "L/d(E)", { locale: ja })}
          </div>
          <InputGroup>
            <Input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
            />
            <InputGroupAddon addonType="append" hidden={type !== "Start"}>
              <Button
                title="現在の時刻を設定する"
                onClick={handleSetStartTimeNow}
              >
                <FontAwesomeIcon icon={faPenNib} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <FontAwesomeIcon icon={faMinus} className="mx-3" />
          <InputGroup>
            <Input type="time" value={endTime} onChange={handleEndTimeChange} />
            <InputGroupAddon addonType="append" hidden={type !== "End"}>
              <Button
                title="現在の時刻を設定する"
                onClick={handleSetEndTimeNow}
              >
                <FontAwesomeIcon icon={faPenNib} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </div>
  );
};
