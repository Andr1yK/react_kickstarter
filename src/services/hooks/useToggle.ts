import { useState, useCallback, useEffect } from 'react';

type UseToggle = (initialState?: boolean) => [boolean, () => void];

export const useToggle: UseToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(_state => !_state), []);

  return [state, toggle];
};

export const useToggleWithFixPage: UseToggle = (initialState = false) => {
  const [state, toggle] = useToggle(initialState);

  useEffect(() => {
    if (state) {
      document.body.classList.add('page__body--fixed');
    } else {
      document.body.classList.remove('page__body--fixed');
    }
  }, [state, toggle]);

  return [state, toggle];
};
