/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';
import Logo from '../Logo/Logo';
import NavList from '../NavList/NavList';

import './MobileNav.scss';

type Props = {
  isOpen: boolean;
  onMenuToggle: () => void;
};

const MobileNav: FC<Props> = ({ isOpen, onMenuToggle }) => {
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

          <Link
            to="cart"
            className=" menu__buy button button--size--full"
          >
            Buy
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default memo(MobileNav);
