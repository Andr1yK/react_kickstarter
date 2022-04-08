import { FC, memo } from 'react';

type Props = {
  onClick: () => void,
};

const HeaderMenuOpener: FC<Props> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="header__menu-opener icon icon--menu-opener menu-opener"
  >
    <span />
    <span />
    <span />
  </button>
);

export default memo(HeaderMenuOpener);
