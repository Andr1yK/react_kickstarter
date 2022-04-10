/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, memo } from 'react';

import { useSelector } from '../../../services/hooks';
import { useDeviceTypeState } from '../../../services/contexts/DeviceTypeContext';
import { AboutUs } from './AboutUs';
import { Benefits } from './Benefits';
import { ContactUs } from './ContactUs';
import { Features } from './Features';
import { FirstScreen } from './FirstScreen';

import Navigation from './Navigation/Navigation';
import { Technology } from './Technology';
import VideoSection from './VideoSection/VideoSection';

export const Content: FC = memo(() => {
  const featuresLength = useSelector(state => state.features.length);
  const { onDesktop } = useDeviceTypeState();

  return (
    <main className="main">
      <FirstScreen />

      {onDesktop && <Navigation />}

      <Benefits />

      <VideoSection />

      <AboutUs />

      <Technology />

      {!!featuresLength && <Features />}

      <ContactUs />
    </main>
  );
});
