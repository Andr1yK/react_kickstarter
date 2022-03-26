/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC } from 'react';

import './App.scss';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { logo } from './images';

const App: FC = () => {
  return (
    <>
      <Header className="page__header" />

      <nav className="page__menu menu" id="menu">
        <Container>
          <div className="menu__content">
            <div className="menu__top">
              <a
                href="https://crazybaby.com/"
                className="logo"
                target="_blank"
                rel="noreferrer"
              >
                <img src={logo} alt="crazy baby logo" className="logo__image" />
              </a>

              <div className="menu__cross">
                <a href="#" className="icon icon--cross menu-close" />
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

            <div className="menu__lang-swicher lang-swicher">
              <label className="lang-swicher__label" htmlFor="lang-swicher-en">
                <input
                  className="lang-swicher__input"
                  type="radio"
                  name="lang-menu"
                  checked
                  id="lang-swicher-en"
                />
                <span className="lang-swicher__text">EN</span>
              </label>
              <label className="lang-swicher__label" htmlFor="lang-swicher-ua">
                <input
                  className="lang-swicher__input"
                  type="radio"
                  name="lang-menu"
                  id="lang-swicher-ua"
                />
                <span className="lang-swicher__text">UA</span>
              </label>
            </div>

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

      <Content />

      <Footer className="page__footer" />

      <div className="go-top page__go-top container">
        <div className="go-top__button">
          <a
            href="#"
            className="
          go-top__link
          icon
          icon--contain
          icon--go-top
          "
          />
        </div>
      </div>

      <section className="popup" data-popup="video">
        <div className="popup__area" />
        <div className="popup__body container">
          <div className="popup__content">
            <div className="popup__cross">
              <div className="icon icon--cross-grey menu-close" />
            </div>

            <video
              className="popup__video"
              controls
              data-video-name="about-video"
              preload="none"
            >
              <source
                src="https://v.kickstarter.com/1644323971_429b7ee742104d8ba037ae223d4abd3c63ee422b/projects/2248611/video-654125-h264_high.mp4"
                type='video/mp4; codecs="avc1.64001E, mp4a.40.2"'
              />
              <source
                src="https://v.kickstarter.com/1644323971_429b7ee742104d8ba037ae223d4abd3c63ee422b/projects/2248611/video-654125-h264_base.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
              You&apos;ll need an HTML5 capable browser to see this content.
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
