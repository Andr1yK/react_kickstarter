/* eslint-disable jsx-a11y/control-has-associated-label */
import classNames from 'classnames';
import {
  memo,
  FC,
  useState,
  ChangeEvent,
  useCallback,
} from 'react';

import style from './Counter.module.scss';

type Props = {
  className?: string,
  initialValue?: number,
  min?: number,
  max?: number,
};

export const Counter: FC<Props> = memo(({
  className = '',
  initialValue = 1,
  min = 1,
  max = 99,
}) => {
  const [count, setCount] = useState(initialValue);

  const getValidCount = useCallback((value: number, currentValue: number) => {
    if (value < min) {
      return min;
    }

    if (value > max) {
      return max;
    }

    if (Number.isNaN(value)) {
      return currentValue;
    }

    return value;
  }, [max, min]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    setCount((currentCount) => getValidCount(value, currentCount));
  }, [getValidCount]);

  const handleClick = useCallback((step: number) => () => {
    setCount((currentCount) => getValidCount(currentCount + step, currentCount));
  }, [getValidCount]);

  return (
    <div
      className={classNames(
        className,
        style.counter,
      )}
    >
      <button
        type="button"
        disabled={count <= min}
        onClick={handleClick(-1)}
        className={classNames(
          style.counter__button,
          style['counter__button--minus'],
        )}
      />
      <label htmlFor="count">
        <input
          type="text"
          name="count"
          className={classNames(
            style['counter__count-input'],
            style['counter__count-input--large'],
          )}
          value={count}
          onChange={handleChange}
        />
      </label>
      <button
        type="button"
        disabled={count >= max}
        onClick={handleClick(1)}
        className={classNames(
          style.counter__button,
          style['counter__button--plus'],
        )}
      />
    </div>
  );
});
