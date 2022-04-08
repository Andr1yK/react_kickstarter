import { Reducer, Sections } from '../../services/types';

const SET_SECTIONS_LIST = 'SET_SECTIONS_LIST';

export const sectionListReducer: Reducer = (state, action) => {
  switch (action.type) {
    case SET_SECTIONS_LIST:
      return {
        ...state,
        sections: action.payload,
      };

    default:
      return state;
  }
};

export const actionSetSectionsList = (sections: Sections) => ({
  type: SET_SECTIONS_LIST,
  payload: sections,
});
