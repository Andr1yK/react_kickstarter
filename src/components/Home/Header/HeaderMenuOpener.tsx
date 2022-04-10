import { FC, memo } from 'react';
import { useMenuState } from '../contexts/MenuStateContext';

const HeaderMenuOpener: FC = () => {
  const [, toggle] = useMenuState();

  return (
    <button
      type="button"
      onClick={toggle}
      className="header__menu-opener icon icon--menu-opener menu-opener"
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default memo(HeaderMenuOpener);
