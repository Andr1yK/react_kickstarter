import classNames from 'classnames';
import React, {
  FC,
  memo,
  useMemo,
} from 'react';
import { GridItemPosition } from './types';

type Props = {
  className?: string,
  fromTablet?: GridItemPosition,
  fromDesktop?: GridItemPosition,
  htmlTag?: string,
  render?: null | FC<Props>
};

const GridItem: FC<Props> = memo(({
  children,
  className,
  fromTablet = [],
  fromDesktop = [],
  htmlTag = 'div',
  render = null,
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

  return React.createElement(render || htmlTag, { className: componentClassName }, children);
});

export { GridItem };
