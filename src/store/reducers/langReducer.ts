import { Reducer } from '../../types';

export const langReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
