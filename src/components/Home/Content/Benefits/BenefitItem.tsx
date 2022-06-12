import { FC, memo } from 'react';
import { GridItem } from '../../../../layouts/Grid';
import { IBenefit } from './types/IBenefit';

type Props = Omit<IBenefit, 'id'>;

const BenefitItem: FC<Props> = memo(({
  discription, gridPosition, imageUrl, title,
}) => (
  <GridItem
    className="benefits__item"
    fromTablet={gridPosition.tablet}
    fromDesktop={gridPosition.desktop}
  >
    <img
      src={imageUrl as string}
      alt={title}
      className="benefits__icon"
    />
    <h2 className="benefits__title">{title}</h2>
    <p className="benefits__discription">
      {discription}
    </p>
  </GridItem>
));

export default BenefitItem;
