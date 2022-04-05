import { useContext } from 'react';
import { StateContext } from '../store';
import { Store } from '../types';

export const useSelector = (callback: (store: Store) => any) => {
  return callback(useContext(StateContext));
};
