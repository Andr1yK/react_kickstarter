import { Reducer } from '../../types';

export const featuresReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEATURES':
      return {
        ...state,
        features: action.payload,
      };

    default:
      return state;
  }
};
