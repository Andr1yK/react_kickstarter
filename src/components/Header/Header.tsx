import { FC, memo } from 'react';
import Container from '../Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';
import Logo from '../Logo/Logo';

import './Header.scss';

type Props = {
  className?: string;
  onMenuToggle: () => void;
  lang: string;
  onSelectLang: (lang: string) => void;
};

const Header: FC<Props> = memo(
  ({ className, onMenuToggle, lang, onSelectLang }) => {
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

              <LangSwicher currentLang={lang} onSelectLang={onSelectLang} />

              <a href="cart.html" className="header__buy button button--buy">
                Buy
              </a>
            </div>
          </div>
        </Container>
      </header>
    );
  },
);

Header.defaultProps = {
  className: '',
};

export default Header;
