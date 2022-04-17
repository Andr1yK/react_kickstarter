import classNames from 'classnames';
import { memo, FC } from 'react';
import { Color } from '../../types/Color';

import style from './Filters.module.scss';

type Props = {
  colors: Color[],
  onChange: (id: number) => () => void,
  selectedColorId: number,
};

export const Filters: FC<Props> = memo(({
  colors,
  onChange,
  selectedColorId,
}) => {
  return (
    <div className={style.filter}>
      <div className={style.colors}>
        {colors.map((color, index) => (
          <button
            key={color.id}
            type="button"
            onClick={onChange(index)}
            className={classNames(
              style.colorConatainer,
              {
                [style[`colorConatainer--active--${color.name}`]]: index === selectedColorId,
              },
            )}
          >
            <div
              className={classNames(
                style.color,
                style[`color--${color.name}`],
              )}
            />
          </button>
        ))}
      </div>
      <span className={style.colorName}>
        {colors[selectedColorId].displayName}
      </span>
    </div>
  );
});
