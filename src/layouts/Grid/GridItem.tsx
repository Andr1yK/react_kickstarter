import classNames from 'classnames';
import { FC, memo, useMemo } from 'react';
import { GridItemPosition } from './types';

type Props = {
  className?: string,
  fromTablet?: GridItemPosition,
  fromDesktop?: GridItemPosition,
  type?: 'div' | 'h2',
};

const GridItem: FC<Props> = memo(({
  children,
  className,
  fromTablet = [],
  fromDesktop = [],
  type = 'div',
}) => {
  const tabletPosition = useMemo(() => `grid__item--t--${fromTablet[0]}-${fromTablet[1]}`, [fromTablet]);
  const desktopPosition = useMemo(() => `grid__item--d--${fromDesktop[0]}-${fromDesktop[1]}`, [fromDesktop]);

  const componentClassName = classNames(
    'grid__item',
    className,
    {
      [tabletPosition]: fromTablet.length,
      [desktopPosition]: fromDesktop.length,
    },
  );

  const renderedComponent = () => {
    switch (type) {
      case 'h2':
        return (
          <h2 className={componentClassName}>
            {children}
          </h2>
        );

      default:
        return (
          <div className={componentClassName}>
            {children}
          </div>
        );
    }
  };

  return renderedComponent();
});

export { GridItem };
