/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FC,
  memo,
} from 'react';

import { useSelector } from '../../../services/hooks';
import { AboutUs } from './AboutUs';
import { Benefits } from './Benefits';
import { ContactUs } from './ContactUs';
import { Features } from './Features';
import { FirstScreen } from './FirstScreen';

import Navigation from './Navigation/Navigation';
import { Technology } from './Technology';
import VideoSection from './VideoSection/VideoSection';

type Props = {
  deviceType: {
    onTablet: boolean,
    onDesktop: boolean,
  },
  onPopupToggle: () => void,
};

export const Content: FC<Props> = memo(({ deviceType, onPopupToggle }) => {
  const featuresLength = useSelector(state => state.features.length);

  return (
    <main className="main">
      <FirstScreen />

      {deviceType.onDesktop && <Navigation />}

      <Benefits />

      <VideoSection onPlay={onPopupToggle} />

      <AboutUs />

      <Technology />

      {!!featuresLength && <Features deviceType={deviceType} />}

      <ContactUs />
    </main>
  );
});
