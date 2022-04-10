import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

import logo from './logo.svg';

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className = '' }) => {
  return (
    <Link to="/" className={`logo ${className}`}>
      <img src={logo} alt="crazy baby logo" className="logo__image" />
    </Link>
  );
};

export default memo(Logo);
