import { FeatureBlock } from '../types';

export const actionSetFeatures = (features: FeatureBlock) => ({
  type: 'SET_FEATURES',
  payload: features,
});
