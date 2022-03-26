/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { features } from 'process';
import { FC } from 'react';

import './App.scss';
import {
  logo,
  headerImage,
  calipers,
  speaker,
  wifi,
  sun,
  design,
  technology,
  martin,
} from './images';

const App: FC = () => {
  return (
    <>
      <div className="page__header">
        <header className="header">
          <div className="container">
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
                  <label
                    className="lang-swicher__label"
                    htmlFor="lang-swicher-en"
                  >
                    <input
                      className="lang-swicher__input"
                      type="radio"
                      name="lang"
                      id="lang-swicher-en"
                      checked
                    />
                    <span className="lang-swicher__text">EN</span>
                  </label>
                  <label
                    className="lang-swicher__label"
                    htmlFor="lang-swicher-ua"
                  >
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
          </div>
        </header>
      </div>

      <nav className="page__menu menu" id="menu">
        <div className="container">
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
        </div>
      </nav>

      <main className="main">
        <section className="page__section first-screen">
          <div className="container">
            <div
              className="
              first-screen__content
              grid
              grid--mobile-flex
            "
            >
              <div
                className="
                grid__item
                grid__item--t--1-3
                grid__item--d--1-4
                first-screen__text
              "
              >
                <h1 className="first-screen__title">
                  Futuristic Wireless Speaker
                  <a
                    href="cart.html"
                    className="
                    first-screen__cart
                  "
                  >
                    <span className="icon icon--contain icon--cart" />
                  </a>
                </h1>

                <p className="first-screen__description">
                  Luna’s performance is balanced and smooth in all frequency
                  ranges which makes the music both naturally pleasant and
                  distinctly more layered.
                </p>
              </div>

              <div
                className="
                grid__item
                grid__item--t--4-8
                grid__item--d--5-12
                first-screen__image-conatiner
              "
              >
                <img
                  className="first-screen__image"
                  //   srcSet="
                  //   ./images/header-320w.png 320w,
                  //   ./images/header-768w.png 768w,
                  //   ./images/header-1024w.png 1024w
                  // "
                  //   sizes="
                  //   (min-width: 768px) 90vw,
                  //   300px
                  // "
                  src={headerImage}
                  alt="Futuristic Wireless Speaker"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="navigation
          page__section
          page__section--nav
        "
        >
          <div className="container">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#specs" className="navigation__link link linkTo">
                  SPECS
                </a>
              </li>
              <li className="navigation__item">
                <a href="#our-story" className="navigation__link link linkTo">
                  OUR STORY
                </a>
              </li>
              <li className="navigation__item">
                <a href="#about-us" className="navigation__link link linkTo">
                  ABOUT US
                </a>
              </li>
              <li className="navigation__item">
                <a href="#technology" className="navigation__link link linkTo">
                  TECHNOLOGY
                </a>
              </li>
              <li className="navigation__item">
                <a href="#features" className="navigation__link link linkTo">
                  FEATURES
                </a>
              </li>
              <li className="navigation__item">
                <a href="#contact-us" className="navigation__link link linkTo">
                  GET IN TOUCH
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="specs"
          data-sect-name="specs-mob"
          className="page__section benefits"
        >
          <div className="container">
            <div className="benefits__content grid grid--tablet">
              <div
                className="
                grid__item
                grid__item--t--1-4
                grid__item--d--1-3
                benefits__item
              "
              >
                <img
                  src={calipers}
                  alt="Futuristic Design"
                  className="benefits__icon"
                />
                <h2 className="benefits__title">Futuristic Design</h2>
                <p className="benefits__discription">
                  To give Luna a truly flawless look, we specifically picked
                  aircraft grade aluminum as its material and adopted both
                  three-dimensional stretch-bending technology and a high
                  precision cold forging technique.
                </p>
              </div>

              <div
                className="
                grid__item
                grid__item--t--5-8
                grid__item--d--4-6
                benefits__item
              "
              >
                <img
                  src={speaker}
                  alt="Tweeter Speaker System"
                  className="benefits__icon"
                />
                <h2 className="benefits__title">Tweeter Speaker System</h2>
                <p className="benefits__discription">
                  To deliver a more layered sound performance better than a sole
                  full-range speaker, our team equipped Luna with one more
                  tweeter speaker responsible for high-frequency sound
                  independently.
                </p>
              </div>

              <div
                className="
                grid__item
                grid__item--t--1-4
                grid__item--d--7-9
                benefits__item
              "
              >
                <img
                  src={wifi}
                  alt="Multiroom System"
                  className="benefits__icon"
                />
                <h2 className="benefits__title">Multiroom System</h2>
                <p className="benefits__discription">
                  Luna is natively compatible with your home Wi-Fi. Set up
                  multiple speakers in different rooms to expand your music
                  experience into the entire house.
                </p>
              </div>

              <div
                className="
                grid__item
                grid__item--t--5-8
                grid__item--d--10-12
                benefits__item
              "
              >
                <img
                  src={sun}
                  alt="Intuitive Lighting System"
                  className="benefits__icon"
                />
                <h2 className="benefits__title">Intuitive Lighting System</h2>
                <p className="benefits__discription">
                  An intuitive user interface allows you to adjust the hue and
                  saturation of color for lighting that fits any mood and
                  situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-story"
          data-sect-name="our-story-mob"
          className="page__section video-section"
        >
          <div className="video-section__content">
            <div
              className="video-section__play-button"
              data-requred-video="about-video"
            >
              <div className=" icon icon--play-button" />
            </div>
          </div>
        </section>

        <section
          id="about-us"
          data-sect-name="about-us-mob"
          className="page__section about"
        >
          <div className="container">
            <div className="about__content1">
              <div className="about__content grid grid--mobile-flex">
                <div
                  className="
                about__image-container
                grid__item
                grid__item--t--1-4
                grid__item--d--2-7
                "
                >
                  <img
                    className="about__image"
                    //   srcSet="
                    //   ./images/design-320w.jpg 320w,
                    //   ./images/design-768w.jpg 768w,
                    //   ./images/design-1024w.jpg 1024w
                    // "
                    //   sizes="
                    //   (min-width: 320px) 320px
                    //   (min-width: 768px) 748px,
                    //   968px
                    // "
                    src={design}
                    alt="DESIGNED FOR THE FUTURE"
                  />
                </div>

                <h2
                  className="
                  about__title
                  grid__item
                  grid__item--t--4-8
                  grid__item--d--7-11
                "
                >
                  DESIGNED FOR THE FUTURE
                </h2>

                <div
                  className="
                  about__text
                  grid__item
                  grid__item--t--5-8
                  grid__item--d--8-11
                "
                >
                  <p className="about__description">
                    In 2014, a group of geeky industrial designers, engineering
                    veterans and acoustic experts formed crazybaby. This is a
                    bunch of passionate people who are crazy enough to think
                    they can challenge the industry with disruptive audio
                    products.
                  </p>

                  <a
                    className="
                    link
                    link--green
                    link--bottom-line
                    about__link
                  "
                    href="https://crazybaby.com/"
                  >
                    see more about us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="technology"
          data-sect-name="technology-mob"
          className="page__section technology"
        >
          <div className="container">
            <div className="technology__content grid grid--desktop">
              <h2 className="technology__title grid__item grid__item--d--2-4">
                technology
              </h2>
              <div className="technology__image-container grid__item grid__item--d--1-12">
                <img
                  src={technology}
                  alt="technology"
                  className="technology__image"
                />
              </div>

              <div
                className="
                technology__quotes-container
                grid__item
                grid__item--d--3-10
              "
              >
                <p className="technology__quotes-text ">
                  It really took me by surprise honestly to have such full
                  beautiful sound that coming out of this small compact device.
                  And with the brush aluminum surface, it feels so familiar.
                  Like my iPhone.
                </p>

                <div className="technology__quotes-author">
                  <div className="technology__quotes-image-container">
                    <img
                      className="technology__quotes-image"
                      src={martin}
                      alt="Creative director Garrett Martin"
                    />
                  </div>

                  <h4 className="technology__quotes-name">Garrett Martin</h4>

                  <div className="technology__quotes-rank">
                    Creative Director
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          data-sect-name="features-mob"
          className="page__section features"
        >
          <div className="container">
            <div className="features__content">
              <h2 className="features__title">features</h2>
              <div className="features__slider slider">
                <ul className="features__items slider__items grid grid--tablet">
                  <li
                    className="
                    features__item
                    slider__item
                    grid__item--t--4-8
                    grid__item--d--6-10
                  "
                  >
                    <h4 className="features__item-title">Sound & Music</h4>
                    <ul className="features__list">
                      <li className="features__list-item">
                        Feel-in-chest Base Power
                      </li>
                      <li className="features__list-item">
                        Lossless Digital Audio Transmission
                      </li>
                      <li className="features__list-item">
                        Easy & Stable Stereo Pairing
                      </li>
                      <li className="features__list-item">
                        Crisp and Clear High Frequency Sound
                      </li>
                      <li className="features__list-item">
                        Streams from Cloud Music and Local Library
                      </li>
                      <li className="features__list-item">
                        Auto Music Playback from Last Song Stopped
                      </li>
                    </ul>
                  </li>

                  <li
                    className="
                    features__item
                    slider__item
                    grid__item--t--1-5
                    grid__item--d--2-6
                  "
                  >
                    <h4 className="features__item-title">Connectivity</h4>
                    <ul className="features__list">
                      <li className="features__list-item">
                        Hands Free Wireless Audio
                      </li>
                      <li className="features__list-item">Bluetooth 4.0 LE</li>
                      <li className="features__list-item">
                        Wi-Fi 2.4 GHz (802.11 b/g/n)
                      </li>
                      <li className="features__list-item">
                        Smart Multiroom System Set Up
                      </li>
                      <li className="features__list-item">
                        Party Mode with 6.0 Units and above
                      </li>
                      <li className="features__list-item">
                        Powerful MESHNET Multi Speaker Network
                      </li>
                    </ul>
                  </li>

                  <li
                    className="
                    features__item
                    slider__item
                    grid__item--t--3-7
                    grid__item--d--4-8
                  "
                  >
                    <h4 className="features__item-title">App Features</h4>
                    <ul className="features__list">
                      <li className="features__list-item">
                        Customize Music Schedule
                      </li>
                      <li className="features__list-item">
                        Wake Up with Favorite Songs
                      </li>
                      <li className="features__list-item">
                        Home Detection Auto Wake Up
                      </li>
                      <li className="features__list-item">
                        Color Wheel & Saturation Change
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="slider__control">
                  <div className="slider__buttons">
                    <button
                      type="button"
                      disabled
                      className="slider__prev-button"
                    />
                    <button type="button" className="slider__next-button" />
                  </div>
                  <div className="slider__page-num">
                    <span className="slider__page-current">01</span>
                    {' / '}
                    <span className="slider__page-last">03</span>
                  </div>
                </div>
              </div>

              <div
                className="
                features__image-container
                grid__item--d--1-12
                grid__item--t--2-8
              "
              >
                <img
                  src={features}
                  alt="crazybaby speaker"
                  className="features__image"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-us"
          data-sect-name="contact-us-mob"
          className="page__section contact"
        >
          <div className="container">
            <div className="contact__content">
              <div className="grid grid--tablet">
                <h2
                  className="
                  contact__title
                  grid__item--t--1-4
                  grid__item--d--2-6
                "
                >
                  DO YOU HAVE ANY QUESTIONS?
                </h2>
                <form
                  action="https://httpbin.org/post"
                  method="post"
                  className="
                  contact__form
                  grid__item--t--5-8
                  grid__item--d--7-11
                "
                >
                  <label htmlFor="contact-email">
                    <input
                      type="email"
                      name="email"
                      className="contact__form-field contact__email"
                      id="contact-email"
                      placeholder="Your email"
                      required
                    />
                  </label>
                  <textarea
                    name="message"
                    className="
                      contact__message
                      contact__form-field
                      contact__form-field--last
                      contact__form-field--textarea
                    "
                    placeholder="Your message..."
                    required
                  />

                  <button type="submit" className="button button--color--green">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer page__footer">
        <div className="container">
          <div className="footer__content">
            <a
              href="https://crazybaby.com/"
              className="footer__logo logo"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logo} alt="crazy baby logo" className="logo__image" />
            </a>

            <div className="footer__social">
              <a
                href="https://www.facebook.com/hicrazybaby/"
                className="
                footer__social-link
                icon
                icon--contain
                icon--facebook
              "
                target="_blank"
                rel="noreferrer"
              />
              <a
                href="https://twitter.com/crazybabyaudio"
                className="
                footer__social-link
                icon
                icon--contain
                icon--twitter
              "
                target="_blank"
                rel="noreferrer"
              />
              <a
                href="https://www.instagram.com/crazybaby/"
                className="
                footer__social-link
                icon
                icon--contain
                icon--instagram
              "
                target="_blank"
                rel="noreferrer"
              />
            </div>

            <p className="footer__copy">
              © 2019 All rights reserved. Terms of Use & Privacy Policy
            </p>
          </div>
        </div>
      </footer>

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
