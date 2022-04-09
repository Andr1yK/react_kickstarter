/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, memo } from 'react';
import Container from '../../../layouts/Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';
import NavList from '../NavList/NavList';

import './MobileNav.scss';
import MobileNavHeader from './MobileNavHeader';

type Props = {
  isOpen: boolean;
  onMenuToggle: () => void;
};

const MobileNav: FC<Props> = ({ isOpen, onMenuToggle }) => {
  return (
    <nav className={`menu ${isOpen ? 'menu--open' : ''}`} id="menu">
      <Container>
        <div className="menu__content">
          <MobileNavHeader onMenuToggle={onMenuToggle} />

          <NavList
            blockName="menu"
            onLinkClick={onMenuToggle}
          />

          <LangSwicher className="menu__lang-swicher" />

          <a
            href="cart.html"
            className=" menu__buy button button--size--full"
          >
            Buy
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default memo(MobileNav);
