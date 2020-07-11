import React, { useCallback, useContext, useEffect } from 'react';
import { InputGroupAddon, InputGroupText, InputGroup, Input } from 'reactstrap';
import { RootContext } from '../Provider';
import { LS_KEYS } from '../utils';

const SavedValue = localStorage.getItem(LS_KEYS.to) || '';
export const ToEditor: React.FC = () => {
  const { dispatch } = useContext(RootContext);
  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value || '';
      dispatch({ type: 'SetTo', payload: value });
      localStorage.setItem(LS_KEYS.to, value);
    },
    [dispatch],
  );
  useEffect(() => {
    dispatch({ type: 'SetTo', payload: SavedValue });
  }, []);
  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>宛先</InputGroupText>
      </InputGroupAddon>
      <Input
        required={true}
        type="email"
        defaultValue={SavedValue}
        onChange={handleChange}
        placeholder="例: report@example.com"
      />
    </InputGroup>
  );
};
