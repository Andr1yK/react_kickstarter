import {
  createContext,
  FC,
  useContext,
  memo,
} from 'react';
import { useToggleWithFixPage } from '../../../services/hooks';

type ContexType = [boolean, () => void];

const MenuStateContext = createContext<ContexType>([false, () => { }]);

export const useMenuState = () => useContext(MenuStateContext);

export const MenuStateProvider: FC = memo(({ children }) => {
  const [isOpen, toggle] = useToggleWithFixPage();

  return (
    <MenuStateContext.Provider value={[isOpen, toggle]}>
      {children}
    </MenuStateContext.Provider>
  );
});
