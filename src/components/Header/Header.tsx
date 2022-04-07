import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';
import Logo from '../Logo/Logo';

import './Header.scss';

type Props = {
  className?: string;
  onMenuToggle: () => void;
};

const Header: FC<Props> = ({ className, onMenuToggle }) => {
  return (
    <header className={`header ${className}`}>
      <Container>
        <div className="header__content">
          <Logo />

          <button
            type="button"
            onClick={onMenuToggle}
            className=" header__menu-opener icon icon--menu-opener menu-opener"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="header__nav">
            <a href="#specs" className="header__link link">
              SPECS
            </a>

            <LangSwicher />

            <Link
              to="cart"
              className=" menu__buy button button--size--full"
            >
              Buy
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  className: '',
};

export default memo(Header);
