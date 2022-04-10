import {
  createContext,
  FC,
  useContext,
  memo,
} from 'react';

type ToggleContexType = [boolean, () => void];

// eslint-disable-next-line no-spaced-func
const PopupStateContext = createContext<ToggleContexType>([false, () => { }]);

export const usePopupState = (): ToggleContexType => useContext(PopupStateContext);

interface Props {
  value: ToggleContexType;
}

export const PopupStateProvider: FC<Props> = memo(({ value, children }) => {
  return (
    <PopupStateContext.Provider value={value}>
      {children}
    </PopupStateContext.Provider>
  );
});
