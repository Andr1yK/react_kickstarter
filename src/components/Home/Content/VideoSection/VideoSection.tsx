/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, memo } from 'react';
import { usePopupState } from '../../contexts/PopupStateContext';

const VideoSection: FC = memo(() => {
  const [, togglePopup] = usePopupState();

  return (
    <section
      id="our-story"
      className="video-section page__section"
    >
      <div className="video-section__content">
        <div className="video-section__play-button">
          <button
            className="icon icon--play-button"
            type="button"
            onClick={togglePopup}
          />
        </div>
      </div>
    </section>
  );
});

export default VideoSection;
