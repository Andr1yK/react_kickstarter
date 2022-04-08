import { useContext } from 'react';
import { StateContext } from '../../store';
import { Store } from '../types';

export const useSelector = <T>(callback: (store: Store) => ReturnType<(store: Store) => T>) => {
  return callback(useContext(StateContext));
};
