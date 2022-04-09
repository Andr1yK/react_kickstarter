/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FC,
  memo,
} from 'react';

import { useSelector } from '../../../services/hooks';

import {
  FirstScreen,
  AboutUs,
  Technology,
  Features,
  ContactUs,
  Benefits,
} from '.';
import Navigation from './Navigation/Navigation';
import VideoSection from './VideoSection/VideoSection';

type Props = {
  deviceType: {
    onTablet: boolean,
    onDesktop: boolean,
  },
  onPopupToggle: () => void,
};

const Content: FC<Props> = ({ deviceType, onPopupToggle }) => {
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
};

export default memo(Content);
