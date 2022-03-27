import { FC, memo } from 'react';

import './Logo.scss';

import { logo } from '../../images';

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <a
      href="https://crazybaby.com/"
      className={`logo ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={logo} alt="crazy baby logo" className="logo__image" />
    </a>
  );
};

Logo.defaultProps = {
  className: '',
};

export default memo(Logo);
