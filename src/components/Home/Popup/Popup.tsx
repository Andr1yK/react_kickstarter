/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { memo, FC } from 'react';

import './Popup.scss';

type Props = {
  isOpen: boolean,
  toggle: () => void,
};

export const Popup: FC<Props> = memo(({ isOpen, toggle }) => {
  return (
    <section className={`popup ${isOpen ? 'popup--open' : ''}`}>
      <div className="popup__area" />
      <div className="popup__body container">
        <div className="popup__content">
          <div className="popup__cross">
            <button
              className="icon icon--cross-grey menu-close"
              type="button"
              onClick={toggle}
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
  );
});
