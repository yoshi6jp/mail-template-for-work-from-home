import React, { createContext, Dispatch, useReducer } from 'react';
interface State {
  to: string;
  subject: string;
  body: string;
  type: 'Start' | 'End';
}
const initialState: State = {
  to: '',
  subject: '',
  body: '',
  type: 'Start',
};
interface ContextState extends State {
  dispatch: Dispatch<Actions>;
}

interface Action {
  type: 'SetTo' | 'SetSubject' | 'SetBody';
  payload: string;
}
interface TypeAction {
  type: 'SetType';
  payload: State['type'];
}
type Actions = Action | TypeAction;
const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'SetTo': {
      return { ...state, to: action.payload };
    }
    case 'SetSubject': {
      return { ...state, subject: action.payload };
    }
    case 'SetBody': {
      return { ...state, body: action.payload };
    }
    case 'SetType': {
      return { ...state, type: action.payload };
    }
    default:
      return state;
  }
};

export const RootContext = createContext<ContextState>({
  ...initialState,
  dispatch: () => {},
});
export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RootContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};
