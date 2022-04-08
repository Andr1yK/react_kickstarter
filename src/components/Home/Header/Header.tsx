import { FC, memo } from 'react';
import Container from '../../../layouts/Container/Container';
import Logo from '../../../layouts/Logo/Logo';

import './Header.scss';

import HeaderNav from './HeaderNav';
import HeaderMenuOpener from './HeaderMenuOpener';

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
