/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, memo } from 'react';
import Container from '../Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';
import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';

import './MobileNav.scss';

type Props = {
  isOpen: boolean;
  onMenuToggle: () => void;
};

const MobileNav: FC<Props> = memo(({ isOpen, onMenuToggle }) => {
  return (
    <nav className={`menu ${isOpen ? 'menu--open' : ''}`} id="menu">
      <Container>
        <div className="menu__content">
          <div className="menu__top">
            <Logo />

            <div className="menu__cross">
              <button
                type="button"
                onClick={onMenuToggle}
                className="icon icon--cross menu-close"
              />
            </div>
          </div>

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
});

export default MobileNav;
