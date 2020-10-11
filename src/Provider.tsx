import React, { createContext, Dispatch, useReducer } from "react";
import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
interface State {
  to: string;
  subject: string;
  body: string;
  type: "Start" | "End";
  schema: JSONSchema7 | null;
  uiSchema: UiSchema | null;
  formData: object | null;
  configUrl: string;
  sendUrl: string;
}
const initialState: State = {
  to: "",
  subject: "",
  body: "",
  type: "Start",
  schema: null,
  uiSchema: null,
  formData: null,
  configUrl: "",
  sendUrl: "",
};
interface ContextState extends State {
  dispatch: Dispatch<Actions>;
}

interface Action {
  type: "SetTo" | "SetSubject" | "SetBody" | "SetConfigUrl" | "SetSendUrl";
  payload: string;
}
interface TypeAction {
  type: "SetType";
  payload: State["type"];
}
interface SchemaAction {
  type: "SetSchema";
  payload: State["schema"];
}
interface UiSchemaAction {
  type: "SetUiSchema";
  payload: State["uiSchema"];
}
interface FormDataAction {
  type: "SetFormData";
  payload: State["formData"];
}

type Actions =
  | Action
  | TypeAction
  | SchemaAction
  | UiSchemaAction
  | FormDataAction;
const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "SetTo": {
      return { ...state, to: action.payload };
    }
    case "SetSubject": {
      return { ...state, subject: action.payload };
    }
    case "SetBody": {
      return { ...state, body: action.payload };
    }
    case "SetType": {
      return { ...state, type: action.payload };
    }
    case "SetSchema": {
      return { ...state, schema: action.payload };
    }
    case "SetUiSchema": {
      return { ...state, uiSchema: action.payload };
    }
    case "SetFormData": {
      return { ...state, formData: action.payload };
    }
    case "SetConfigUrl": {
      return { ...state, configUrl: action.payload };
    }
    case "SetSendUrl": {
      return { ...state, sendUrl: action.payload };
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
