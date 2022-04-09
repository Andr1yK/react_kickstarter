import classNames from 'classnames';
import { FC, memo } from 'react';

type Props = {
  className?: string,
  flexOnMobile?: boolean,
  fromTablet?: boolean,
  fromDesktop?: boolean,
};

const Grid: FC<Props> = memo(({
  children,
  className = '',
  flexOnMobile = false,
  fromTablet = false,
  fromDesktop = false,
}) => {
  return (
    <div
      className={classNames(
        'grid',
        className,
        {
          'grid--mobile-flex': flexOnMobile,
          'grid--tablet': fromTablet,
          'grid--desktop': fromDesktop,
        },
      )}
    >
      {children}
    </div>
  );
});

export { Grid };
