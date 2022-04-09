/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC, memo } from 'react';

type Props = {
  onPlay: () => void,
};

const VideoSection: FC<Props> = memo(({ onPlay }) => (
  <section
    id="our-story"
    className="video-section page__section"
  >
    <div className="video-section__content">
      <div className="video-section__play-button">
        <button
          className="icon icon--play-button"
          type="button"
          onClick={onPlay} />
      </div>
    </div>
  </section>
));

export default VideoSection;
