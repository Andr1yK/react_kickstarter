import { useState, useCallback } from 'react';

type UseToggle = (initialState?: boolean) => [boolean, () => void];

export const useToggle: UseToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(_state => !_state), []);

  return [state, toggle];
};
