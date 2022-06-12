/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, memo } from 'react';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import './Footer.scss';
import { FoterSocial } from './FooterSocial/FoterSocial';

type Props = {
  className?: string;
};

export const Footer: FC<Props> = memo(({ className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <Container>
        <div className="footer__content">
          <Logo className="footer__logo " />

          <FoterSocial />

          <p className="footer__copy">
            © 2019 All rights reserved. Terms of Use & Privacy Policy
          </p>
        </div>
      </Container>
    </footer>
  );
});
