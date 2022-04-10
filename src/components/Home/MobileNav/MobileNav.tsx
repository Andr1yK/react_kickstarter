/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import classNames from 'classnames';
import { FC, memo } from 'react';
import Container from '../../../layouts/Container/Container';
import { useMenuState } from '../contexts/MenuStateContext';
import LangSwicher from '../LangSwicher/LangSwicher';
import NavList from '../NavList/NavList';

import './MobileNav.scss';
import MobileNavHeader from './MobileNavHeader';

export const MobileNav: FC = memo(() => {
  const [isOpen, toggle] = useMenuState();

  return (
    <nav className={classNames('menu', { 'menu--open': isOpen })} id="menu">
      <Container>
        <div className="menu__content">
          <MobileNavHeader />

          <NavList
            blockName="menu"
            onLinkClick={toggle}
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
