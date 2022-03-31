/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC,
  useCallback,
  useState,
  useEffect,
  useContext } from 'react';

import './App.scss';
import { getDataFromServer } from './api/getDataFromServer';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';

import { throttle } from './helpers/throttle';
import { FeatureBlock } from './types';
import { DispatchContext } from './store';
import { setSectionsList } from './actions';

const App: FC = () => {
  const dispatch = useContext(DispatchContext);

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const [features, setFeatures] = useState((): FeatureBlock[] => []);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [deviceType] = useState({
    onTablet: window.matchMedia('(min-width: 768px)').matches,
    onDesktop: window.matchMedia('(min-width: 1024px)').matches,
  });

  useEffect(() => {
    getDataFromServer('/sections.json')
      .then((data) => dispatch(setSectionsList(data)));

    getDataFromServer('/features.json')
      .then((data) => setFeatures(data));
  }, []);

  useEffect(() => {
    if (menuIsOpen || popupIsOpen) {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  }, [menuIsOpen, popupIsOpen]);

  useEffect(() => {
    const handleScroll = throttle(() => setScrollPosition(window.scrollY), 250);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onMenuToggle = useCallback(() => {
    setMenuIsOpen(!menuIsOpen);
  }, [menuIsOpen]);

  const onPopupToggle = useCallback(() => {
    setPopupIsOpen(!popupIsOpen);
  }, [popupIsOpen]);

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        className="page__header"
        onMenuToggle={onMenuToggle}
      />

      {!deviceType.onDesktop && (
        <MobileNav
          isOpen={menuIsOpen}
          onMenuToggle={onMenuToggle}
        />
      )}

      <Content
        features={features}
        deviceType={deviceType}
        onPopupToggle={onPopupToggle}
      />

      <Footer className="page__footer" />

      <div
        className={`go-top page__go-top container ${scrollPosition > 700 && 'go-top--visible'}`}
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

      <section className={`popup ${popupIsOpen ? 'popup--open' : ''}`}>
        <div className="popup__area" />
        <div className="popup__body container">
          <div className="popup__content">
            <div className="popup__cross">
              <button
                className="icon icon--cross-grey menu-close"
                type="button"
                onClick={onPopupToggle}
              />
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
