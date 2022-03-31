import React, { FC, useReducer } from 'react';
import { Action } from '../types/Action';
import { Store } from '../types/Store';

const store: Store = {
  lang: 'en',
  sections: {},
};

const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case 'SET_LANG':
      return {
        ...state,
        lang: action.payload,
      };

    case 'SET_SECTIONS_LIST':
      return {
        ...state,
        sections: action.payload,
      };

    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DispatchContext = React.createContext((_action: Action) => {});
export const StateContext = React.createContext(store);

export const StateProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer as never, store as never);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
