import { Sections } from '../types';

export const setSectionsList = (sections: Sections) => ({
  type: 'SET_SECTIONS_LIST',
  payload: sections,
});
