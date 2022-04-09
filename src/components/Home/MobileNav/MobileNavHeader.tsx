/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, memo } from 'react';
import Logo from '../../../layouts/Logo/Logo';

type Props = {
  onMenuToggle: () => void;
};

const MobileNavHeader: FC<Props> = memo(({ onMenuToggle }) => (
  <div className="menu__header">
    <Logo />

    <div className="menu__cross">
      <button
        id="menuCross"
        type="button"
        onClick={onMenuToggle}
        className="icon icon--cross menu-close"
      />
    </div>
  </div>
));

export default MobileNavHeader;
