import { FC, memo } from 'react';
import { logo } from '../../images';
import Container from '../Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';

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
            <a
              href="https://crazybaby.com/"
              className="logo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logo} alt="crazy baby logo" className="logo__image" />
            </a>

            <button
              type="button"
              onClick={onMenuToggle}
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
            </button>

            <div className="header__nav">
              <a href="#specs" className="header__link link linkTo">
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
