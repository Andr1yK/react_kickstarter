/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import { FC, memo } from 'react';

import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import './Footer.scss';

type Props = {
  className?: string;
};

const Footer: FC<Props> = memo(({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <Container>
        <div className="footer__content">
          <Logo className="footer__logo " />

          <div className="footer__social">
            <a
              href="https://www.facebook.com/hicrazybaby/"
              className="
                footer__social-link
                icon
                icon--contain
                icon--facebook
              "
              target="_blank"
              rel="noreferrer"
            />
            <a
              href="https://twitter.com/crazybabyaudio"
              className="
                footer__social-link
                icon
                icon--contain
                icon--twitter
              "
              target="_blank"
              rel="noreferrer"
            />
            <a
              href="https://www.instagram.com/crazybaby/"
              className="
                footer__social-link
                icon
                icon--contain
                icon--instagram
              "
              target="_blank"
              rel="noreferrer"
            />
          </div>

          <p className="footer__copy">
            © 2019 All rights reserved. Terms of Use & Privacy Policy
          </p>
        </div>
      </Container>
    </footer>
  );
});

Footer.defaultProps = {
  className: '',
};

export default Footer;
