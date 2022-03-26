import { FC } from 'react';
import { logo } from '../../images';
import Container from '../Container/Container';

import './Header.scss';

type Props = {
  className?: string;
};

const Header: FC<Props> = ({ className }) => {
  return (
    <header className={`header ${className}`}>
      <Container>
        <div className="header__content">
          <a
            href="https://crazybaby.com/"
            className="logo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt="crazy baby logo" className="logo__image" />
          </a>

          <a
            href="#menu"
            className="
              header__menu-opener
              icon
              icon--menu-opener
              menu-opener
            "
          >
            <span />
            <span />
            <span />
          </a>

          <div className="header__nav">
            <a href="#specs" className="header__link link linkTo">
              SPECS
            </a>

            <div className="header__lang-swicher lang-swicher">
              <label className="lang-swicher__label" htmlFor="lang-swicher-en">
                <input
                  className="lang-swicher__input"
                  type="radio"
                  name="lang"
                  id="lang-swicher-en"
                  checked
                />
                <span className="lang-swicher__text">EN</span>
              </label>
              <label className="lang-swicher__label" htmlFor="lang-swicher-ua">
                <input
                  className="lang-swicher__input"
                  type="radio"
                  name="lang"
                  id="lang-swicher-ua"
                />
                <span className="lang-swicher__text">UA</span>
              </label>
            </div>

            <a href="cart.html" className="header__buy button button--buy">
              Buy
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.defaultProps = {
  className: '',
};

export default Header;
