import { getDataFromServer } from './getDataFromServer';

export const getFeatures = async () => {
  const features = await getDataFromServer('/feature1s.json');

  return features;
};
