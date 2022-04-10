/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import { memo, FC } from 'react';

import style from './Counter.module.scss';

type Props = {
  className?: string,
};

export const Counter: FC<Props> = memo(({ className = '' }) => {
  return (
    <div
      className={classNames(
        className,
        style.counter,
      )}
    >
      <button
        disabled
        className={classNames(
          style.counter__button,
          style['counter__button--minus'],
        )}
      />
      <label>
        <input
          type="number"
          name="count"
          className={classNames(
            style['counter__count-input'],
            style['counter__count-input--large'],
          )}
          value="1"
        />
      </label>
      <button
        className={classNames(
          style.counter__button,
          style['counter__button--plus'],
        )}
      />
    </div>
  );
});
