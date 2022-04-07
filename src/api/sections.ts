import { getDataFromServer } from './getDataFromServer';

export const getSections = async () => {
  const sections = await getDataFromServer('/sections.json');

  return sections;
};
