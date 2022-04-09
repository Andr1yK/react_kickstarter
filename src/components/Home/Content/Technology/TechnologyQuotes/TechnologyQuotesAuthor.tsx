import { FC, memo } from 'react';
import { martin } from '../images';

const TechnologyQuotesAuthor: FC = memo(() => {
  return (
    <div className="technology__quotes-author">
      <div className="technology__quotes-image-container">
        <img
          className="technology__quotes-image"
          src={martin}
          alt="Creative director Garrett Martin"
        />
      </div>

      <h4 className="technology__quotes-name">Garrett Martin</h4>

      <div className="technology__quotes-rank">Creative Director</div>
    </div>
  );
});

export default TechnologyQuotesAuthor;
