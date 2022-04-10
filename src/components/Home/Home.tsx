import {
  FC,
  memo,
  useEffect,
} from 'react';
import { getSections, getFeatures } from '../../api';
import { useDispatch, useToggleWithFixPage } from '../../services/hooks';
import { actionSetSectionsList, actionSetFeatures } from '../../store/reducers';

import Content from './Content';
import Footer from '../../layouts/Footer';
import GoTopButton from './GoTopButton';
import Header from './Header';
import MobileNav from './MobileNav';
import Popup from './Popup';

import { MenuStateProvider } from './contexts/MenuStateContext';
import { useDeviceTypeState } from '../../services/contexts/DeviceTypeContext';
import { PopupStateProvider } from './contexts/PopupStateContext';

export const Home: FC = memo(() => {
  const dispatch = useDispatch();

  const { onDesktop } = useDeviceTypeState();
  const [isPopupOpen, popupToggle] = useToggleWithFixPage();

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

  return (
    <>
      <MenuStateProvider>
        <Header className="page__header" />

        {!onDesktop && <MobileNav />}
      </MenuStateProvider>

      <PopupStateProvider value={[isPopupOpen, popupToggle]}>
        <Content />
      </PopupStateProvider>

      <Footer className="page__footer" />

      <GoTopButton />

      <PopupStateProvider value={[isPopupOpen, popupToggle]}>
        <Popup />
      </PopupStateProvider>
    </>
  );
});
