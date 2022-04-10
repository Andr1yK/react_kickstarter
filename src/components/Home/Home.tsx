import {
  FC, memo, useEffect, useState,
} from 'react';
import { getSections, getFeatures } from '../../api';
import { throttle } from '../../services/helpers/throttle';
import { useDispatch, useToggle } from '../../services/hooks';
import { actionSetSectionsList, actionSetFeatures } from '../../store/reducers';
import Content from './Content';
import Footer from '../../layouts/Footer';
import GoTopButton from './GoTopButton';
import Header from './Header';
import MobileNav from './MobileNav';
import Popup from './Popup';

export const Home: FC = memo(() => {
  const dispatch = useDispatch();

  const [isMenuOpen, toggleMenu] = useToggle();
  const [isPopupOpen, togglePopup] = useToggle();

  const [deviceType, setDeviceType] = useState({
    onTablet: window.matchMedia('(min-width: 768px)').matches,
    onDesktop: window.matchMedia('(min-width: 1024px)').matches,
  });

  useEffect(() => {
    const handleResize = throttle(() => setDeviceType({
      onTablet: window.matchMedia('(min-width: 768px)').matches,
      onDesktop: window.matchMedia('(min-width: 1024px)').matches,
    }), 300);

    window.addEventListener('resize', handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    /* eslint-disable no-console */
    getSections()
      .then(sections => dispatch(actionSetSectionsList(sections)))
      .catch(console.warn);

    getFeatures()
      .then(features => dispatch(actionSetFeatures(features)))
      .catch(console.warn);
    /* eslint-disable no-console */
  }, [dispatch]);

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

      <Popup isOpen={isPopupOpen} toggle={togglePopup} />
    </>
  );
});
