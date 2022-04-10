import { FC, memo } from 'react';
import { Feature } from '../../../../../services/types';
import { FeaturesListItem } from './FeaturesListItem';

type Props = {
  featuresBlockItems: Feature[],
};

const FeaturesList: FC<Props> = memo(({ featuresBlockItems }) => {
  return (
    <ul className="features__list">
      {featuresBlockItems.map(({ id, text }) => (
        <FeaturesListItem key={id} text={text} />
      ))}
    </ul>
  );
});

export default FeaturesList;
