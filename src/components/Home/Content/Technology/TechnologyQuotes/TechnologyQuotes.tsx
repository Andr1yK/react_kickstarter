import { FC, memo } from 'react';
import TechnologyQuotesAuthor from './TechnologyQuotesAuthor';

export const TechnologyQuotes: FC = memo(() => {
  return (
    <>
      <p className="technology__quotes-text ">
        It really took me by surprise honestly to have such full
        beautiful sound that coming out of this small compact device.
        And with the brush aluminum surface, it feels so familiar. Like
        my iPhone.
      </p>

      <TechnologyQuotesAuthor />
    </>
  );
});
