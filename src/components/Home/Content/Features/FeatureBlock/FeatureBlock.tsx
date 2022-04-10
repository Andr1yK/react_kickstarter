import { FC, memo } from 'react';
import { Feature } from '../../../../../services/types';
import FeaturesList from './FeaturesList';

type Props = {
  title: string,
  featuresBlockItems: Feature[],
};

const FeatureBlock: FC<Props> = memo(({ featuresBlockItems, title }) => {
  return (
    <>
      <h4 className="features__item-title">{title}</h4>
      <FeaturesList featuresBlockItems={featuresBlockItems} />
    </>
  );
});

export default FeatureBlock;
