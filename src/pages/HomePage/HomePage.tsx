/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FC,
  useEffect,
  memo,
} from 'react';
import { getSections, getFeatures } from '../../api';
import Content from './components/Content/Content';
import Footer from '../../components/Footer/Footer';
import GoTopButton from '../../components/GoTopButton/GoTopButton';
import Header from '../../components/Header/Header';
import MobileNav from '../../components/MobileNav/MobileNav';
import { useDispatch, useSelector, useToggle } from '../../hooks';
import { actionSetSectionsList, actionSetFeatures } from '../../store/reducers';

const HomePage: FC = memo(() => {
  const dispatch = useDispatch();
  const deviceType = useSelector(state => state.deviceType);

  const [isMenuOpen, toggleMenu] = useToggle();
  const [isPopupOpen, togglePopup] = useToggle();

  const sections = useSelector(state => state.sections);
  const featuresLength = useSelector(state => state.features.length);

  useEffect(() => {
    /* eslint-disable no-console */

    if (!Object.keys(sections).length) {
      getSections()
        .then(data => dispatch(actionSetSectionsList(data)))
        .catch(console.warn);
    }

    if (!featuresLength) {
      getFeatures()
        .then(data => dispatch(actionSetFeatures(data)))
        .catch(console.warn);
    }
    /* eslint-disable no-console */
  }, []);

  useEffect(() => {
    if (isMenuOpen || isPopupOpen) {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  }, [isMenuOpen, isPopupOpen]);

  return (
    <>
      <Header
        className="page__header"
        onMenuToggle={toggleMenu}
      />

      {!deviceType.onDesktop && (
        <MobileNav
          isOpen={isMenuOpen}
          onMenuToggle={toggleMenu}
        />
      )}

      <Content
        deviceType={deviceType}
        onPopupToggle={togglePopup}
      />

      <Footer className="page__footer" />

      <GoTopButton />

      <section className={`popup ${isPopupOpen ? 'popup--open' : ''}`}>
        <div className="popup__area" />
        <div className="popup__body container">
          <div className="popup__content">
            <div className="popup__cross">
              <button
                className="icon icon--cross-grey menu-close"
                type="button"
                onClick={togglePopup}
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
});

export default HomePage;
