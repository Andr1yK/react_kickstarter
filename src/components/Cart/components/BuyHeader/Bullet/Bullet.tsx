/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { memo, FC } from 'react';
import style from '../BuyHeader.module.scss';

type Props = {
  text: string,
  active?: boolean,
};

export const Bullet: FC<Props> = memo(({ text, active = false }) => {
  return (
    <label
      className={classNames(
        style['buy__bullet-content'],
        {
          [style['buy__bullet-content--active']]: active,
        },
      )}
    >
      <input
        type="radio"
        name="stage"
        className={style['buy__bullet-input']}
        checked={active}
      />

      <div className={style.buy__bullet}>
        <div className={style['buy__bullet-inner']} />
      </div>

      <span className={style['buy__bullet-text']}>
        {text}
      </span>
    </label>
  );
});
