import classNames from 'classnames';
import { memo, FC } from 'react';
import Counter from '../Counter';

import style from './ProductCard.module.scss';

type Props = {
  color: string,
  className?: string,
  image: string,
};

export const ProductCard: FC<Props> = memo(({
  className = '', color, image,
}) => {
  return (
    <div
      className={classNames(
        style.card,
        className,
      )}
    >
      <div className={style.card__close}>
        <span className="icon icon--cross-grey" />
      </div>
      <div className={style.card__content}>
        <div className={style['card__image-container']}>
          <img
            className={style.card__image}
            src={image}
            alt={`${color} luna eye`}
          />
        </div>
        <div className={style.card__specs}>
          <div className={style.card__text}>
            <span className={style['card__color-text']}>Color:</span>
            <span className={style.card__color}>{color}</span>
          </div>
          <Counter className={style.card__counter} />
        </div>
      </div>
    </div>
  );
});
