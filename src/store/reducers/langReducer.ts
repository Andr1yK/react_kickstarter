import { Reducer } from '../../types';

const SET_LANG = 'SET_LANG';

export const langReducer: Reducer = (state, action) => {
  switch (action.type) {
    case SET_LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};

export const actionSetLang = (lang: string) => ({
  type: SET_LANG,
  payload: lang,
});
