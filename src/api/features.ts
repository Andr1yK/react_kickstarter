import { getDataFromServer } from './getDataFromServer';

export const getFeatures = async () => {
  const features = await getDataFromServer('/features.json');

  return features;
};
