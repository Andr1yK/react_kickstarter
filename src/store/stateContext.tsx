import React, { FC, memo, useReducer } from 'react';
import { Action, Store } from '../services/types';
import {
  combineReducers,
  featuresReducer,
  langReducer,
  sectionListReducer,
} from './reducers';

const store: Store = {
  lang: 'en',
  sections: {},
  features: [],
};

const rootReducer = combineReducers({
  langReducer,
  sectionListReducer,
  featuresReducer,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const DispatchContext = React.createContext((_action: Action) => {});
export const StateContext = React.createContext(store);

export const StateProvider: FC = memo(({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, store);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
});
