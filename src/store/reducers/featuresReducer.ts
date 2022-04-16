import { FeatureBlock, Reducer } from '../../services/types';

const SET_FEATURES = 'SET_FEATURES';

export const featuresReducer: Reducer = (state, action) => {
  switch (action.type) {
    case SET_FEATURES:
      return {
        ...state,
        features: action.payload,
      };

    default:
      return state;
  }
};

export const actionSetFeatures = (features: FeatureBlock[]) => ({
  type: SET_FEATURES,
  payload: features,
});
