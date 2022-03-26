import { FC } from 'react';

import './Logo.scss';

import { logo } from '../../images';

const Logo: FC = () => {
  return (
    <a
      href="https://crazybaby.com/"
      className="logo"
      target="_blank"
      rel="noreferrer"
    >
      <img src={logo} alt="crazy baby logo" className="logo__image" />
    </a>
  );
};

export default Logo;
