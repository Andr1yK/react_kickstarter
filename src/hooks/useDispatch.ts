import { useContext } from 'react';
import { DispatchContext } from '../store';

export const useDispatch = () => {
  return useContext(DispatchContext);
};
