import { FeatureBlock } from '../services/types';
import { getDataFromServer } from './getDataFromServer';

export const getFeatures = async (): Promise<FeatureBlock[]> => {
  const features = await getDataFromServer<FeatureBlock[]>('/features.json');

  return features;
};
