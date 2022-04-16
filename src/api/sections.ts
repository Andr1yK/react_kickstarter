import { Sections } from '../services/types';
import { getDataFromServer } from './getDataFromServer';

export const getSections = async (): Promise<Sections> => {
  const sections = await getDataFromServer<Sections>('/sections.json');

  return sections;
};
