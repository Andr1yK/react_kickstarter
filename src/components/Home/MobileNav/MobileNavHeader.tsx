/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, memo } from 'react';
import Logo from '../../../layouts/Logo/Logo';
import { useMenuState } from '../contexts/MenuStateContext';

const MobileNavHeader: FC = memo(() => {
  const [, toggle] = useMenuState();

  return (
    <div className="menu__header">
      <Logo />

      <div className="menu__cross">
        <button
          id="menuCross"
          type="button"
          onClick={toggle}
          className="icon icon--cross menu-close" />
      </div>
    </div>
  );
});

export default MobileNavHeader;
