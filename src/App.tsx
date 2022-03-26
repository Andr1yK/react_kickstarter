/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, useCallback, useState, useEffect } from 'react';

import './App.scss';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';

function throttle(f: (...args: unknown[]) => unknown, delay: number) {
  let isRun = false;
  let timerId: NodeJS.Timeout;

  return function wrapper(...args: unknown[]) {
    if (!isRun) {
      f(...args);
      isRun = true;

      // eslint-disable-next-line no-return-assign
      setTimeout(() => (isRun = false), delay);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => f(...args), delay);
  };
}

const App: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [lang, setLang] = useState('en');

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    const handleTrottledScroll = throttle(handleScroll, 500);

    window.addEventListener('scroll', handleTrottledScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleTrottledScroll);
    };
  }, []);

  const onMenuOpen = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const onMenuClose = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  const onSelectLang = useCallback((selectedLang: string) => {
    setLang(selectedLang);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  console.log('render');

  return (
    <>
      <Header
        className="page__header"
        onMenuToggle={onMenuOpen}
        lang={lang}
        onSelectLang={onSelectLang}
      />

      <MobileNav
        isOpen={menuIsOpen}
        onMenuClose={onMenuClose}
        lang={lang}
        onSelectLang={onSelectLang}
      />

      <Content />

      <Footer className="page__footer" />

      <div
        className={`go-top page__go-top container ${
          scrollPosition > 800 && 'go-top--visible'
        }`}
      >
        <div className="go-top__button">
          <button
            type="button"
            onClick={scrollToTop}
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
