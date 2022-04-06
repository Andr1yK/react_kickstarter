import { Sections } from '../types';

export const actionSetSectionsList = (sections: Sections) => ({
  type: 'SET_SECTIONS_LIST',
  payload: sections,
});
