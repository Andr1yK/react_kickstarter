/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, memo } from 'react';
import Container from '../Container/Container';
import LangSwicher from '../LangSwicher/LangSwicher';
import Logo from '../Logo/Logo';

import './MobileNav.scss';

type Props = {
  isOpen: boolean;
  onMenuClose: () => void;
  lang: string;
  onSelectLang: (lang: string) => void;
};

const MobileNav: FC<Props> = memo(
  ({
    isOpen, onMenuClose, lang, onSelectLang,
  }) => {
    return (
      <nav className={`menu ${isOpen && 'menu--open'}`} id="menu">
        <Container>
          <div className="menu__content">
            <div className="menu__top">
              <Logo />

              <div className="menu__cross">
                <button
                  type="button"
                  onClick={onMenuClose}
                  className="icon icon--cross menu-close"
                />
              </div>
            </div>

            <ul className="menu__list">
              <li className="menu__item">
                <a href="#specs-mob" className="menu__link link linkTo">
                  SPECS
                </a>
              </li>
              <li className="menu__item">
                <a href="#our-story-mob" className="menu__link link linkTo">
                  OUR STORY
                </a>
              </li>
              <li className="menu__item">
                <a href="#about-us-mob" className="menu__link link linkTo">
                  ABOUT US
                </a>
              </li>
              <li className="menu__item">
                <a href="#technology-mob" className="menu__link link linkTo">
                  TECHNOLOGY
                </a>
              </li>
              <li className="menu__item">
                <a href="#features-mob" className="menu__link link linkTo">
                  FEATURES
                </a>
              </li>
              <li className="menu__item">
                <a href="#contact-us-mob" className="menu__link link linkTo">
                  GET IN TOUCH
                </a>
              </li>
            </ul>

            <LangSwicher
              className="menu__lang-swicher"
              currentLang={lang}
              onSelectLang={onSelectLang}
            />

            <a
              href="cart.html"
              className="
              menu__buy
              button
              button--size--full
            "
            >
              Buy
            </a>
          </div>
        </Container>
      </nav>
    );
  },
);

export default MobileNav;
