import classNames from 'classnames';
import { FC, memo, useMemo } from 'react';

type ItemCoordinates = [number, number] | never[];

type Props = {
  className?: string,
  fromTablet?: ItemCoordinates,
  fromDesktop?: ItemCoordinates,
};

const GridItem: FC<Props> = memo(({
  children,
  className,
  fromTablet = [],
  fromDesktop = [],
}) => {
  const tabletPosition = useMemo(() => `grid__item--t--${fromTablet[0]}-${fromTablet[1]}`, [fromTablet]);
  const desktopPosition = useMemo(() => `grid__item--d--${fromDesktop[0]}-${fromDesktop[1]}`, [fromDesktop]);

  return (
    <div
      className={classNames(
        'grid__item',
        className,
        {
          [tabletPosition]: fromTablet.length,
          [desktopPosition]: fromDesktop.length,
        },
      )}
    >
      {children}
    </div>
  );
});

export { GridItem };
