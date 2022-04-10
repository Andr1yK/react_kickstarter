import { memo, FC } from 'react';

type Props = {
  text: string,
};

export const FeaturesListItem: FC<Props> = memo(({ text }) => {
  return (
    <li className="features__list-item">
      {text}
    </li>
  );
});
