/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FC,
  memo,
} from 'react';

import { useSelector } from '../../hooks';
import Container from '../Container/Container';
import {
  FirstScreen, Benefits, AboutUs, Technology, Features, ContactUs,
} from '../ContentSections';
import NavList from '../NavList/NavList';

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

      {deviceType.onDesktop && (
        <section className="navigation page__section page__section--nav ">
          <Container>
            <NavList blockName="navigation" />
          </Container>
        </section>
      )}

      <Benefits />

      <section
        id="our-story"
        className="page__section video-section"
      >
        <div className="video-section__content">
          <div
            className="video-section__play-button"
            data-requred-video="about-video"
          >
            <button className=" icon icon--play-button" type="button" onClick={onPopupToggle} />
          </div>
        </div>
      </section>

      <AboutUs />

      <Technology />

      {!!featuresLength && <Features deviceType={deviceType} />}

      <ContactUs />
    </main>
  );
};

export default memo(Content);
