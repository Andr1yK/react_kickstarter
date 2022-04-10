import { FC, memo } from 'react';

import './Logo.scss';

import logo from './logo.svg';

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className = '' }) => {
  return (
    <a
      href="/"
      className={`logo ${className}`}
    >
      <img src={logo} alt="crazy baby logo" className="logo__image" />
    </a>
  );
};

export default memo(Logo);
