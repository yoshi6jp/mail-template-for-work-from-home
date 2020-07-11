import React, { createContext, useReducer } from 'https://yoshi6jp.github.io/mail-template-for-work-from-home/web_modules/react.js';
const initialState = {
  to: '',
  subject: '',
  body: '',
  type: 'Start'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SetTo':
      {
        return { ...state,
          to: action.payload
        };
      }

    case 'SetSubject':
      {
        return { ...state,
          subject: action.payload
        };
      }

    case 'SetBody':
      {
        return { ...state,
          body: action.payload
        };
      }

    case 'SetType':
      {
        return { ...state,
          type: action.payload
        };
      }

    default:
      return state;
  }
};

export const RootContext = /*#__PURE__*/createContext({ ...initialState,
  dispatch: () => {}
});
export const Provider = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return /*#__PURE__*/React.createElement(RootContext.Provider, {
    value: { ...state,
      dispatch
    }
  }, children);
};