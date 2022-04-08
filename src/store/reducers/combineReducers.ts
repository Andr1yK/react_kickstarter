import { Reducer } from '../../services/types';

export const combineReducers = (
  reducers: { [key: string]: Reducer },
): Reducer => {
  return (state, action) => (
    Object.values(reducers)
      .reduce((acc, reducer) => ({
        ...acc,
        ...reducer(acc, action),
      }), state)
  );
};
