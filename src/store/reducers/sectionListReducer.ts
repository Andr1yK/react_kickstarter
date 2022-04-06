import { Reducer } from '../../types';

export const sectionListReducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SECTIONS_LIST':
      return {
        ...state,
        sections: action.payload,
      };

    default:
      return state;
  }
};
