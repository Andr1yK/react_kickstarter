import classNames from 'classnames';
import { FC, memo } from 'react';

type Props = {
  className?: string,
  flexOnMobile?: boolean,
  fromTablet?: boolean,
  fromDesktop?: boolean,
  style?: React.CSSProperties,
  type?: 'div' | 'ul',
};

const Grid: FC<Props> = memo(({
  children,
  className = '',
  flexOnMobile = false,
  fromTablet = false,
  fromDesktop = false,
  style = {},
  type = 'div',
}) => {
  const componentClassName = classNames(
    'grid',
    className,
    {
      'grid--mobile-flex': flexOnMobile,
      'grid--tablet': fromTablet,
      'grid--desktop': fromDesktop,
    },
  );

  const renderedComponent = () => {
    switch (type) {
      case 'ul':
        return (
          <ul
            className={componentClassName}
            style={style}
          >
            {children}
          </ul>
        );

      default:
        return (
          <div
            className={componentClassName}
            style={style}
          >
            {children}
          </div>
        );
    }
  };

  return renderedComponent();
});

export { Grid };
