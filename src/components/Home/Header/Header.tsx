import { FC, memo } from 'react';

import HeaderNav from './HeaderNav';
import Logo from '../../../layouts/Logo/Logo';
import HeaderMenuOpener from './HeaderMenuOpener';
import Container from '../../../layouts/Container/Container';

import './Header.scss';

type Props = {
  className?: string;
  onMenuToggle: () => void;
};

const Header: FC<Props> = ({ className = '', onMenuToggle }) => (
  <header className={`header ${className}`}>
    <Container>
      <div className="header__content">
        <Logo />

        <HeaderMenuOpener onClick={onMenuToggle} />

        <HeaderNav />
      </div>
    </Container>
  </header>
);

export default memo(Header);
