import React, { useCallback, useContext } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { RootContext } from '../Provider';
export const TypeSelector: React.FC = () => {
  const { type, dispatch } = useContext(RootContext);
  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'SetType',
        payload: evt.target.value as 'Start' | 'End',
      });
    },
    [dispatch],
  );
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>種別</InputGroupText>
      </InputGroupAddon>
      <div className="form-control">
        <FormGroup check inline>
          <Label check>
            <Input
              value="Start"
              name="type"
              type="radio"
              onChange={handleChange}
              defaultChecked={type === 'Start'}
            />
            業務開始
          </Label>
        </FormGroup>

        <FormGroup check inline>
          <Label check>
            <Input
              value="End"
              name="type"
              type="radio"
              onChange={handleChange}
              defaultChecked={type === 'End'}
            />
            業務終了
          </Label>
        </FormGroup>
      </div>
    </InputGroup>
  );
};
