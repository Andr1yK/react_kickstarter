/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import { memo, FC } from 'react';

type Props = {
  link: string,
  socialNetwork: 'facebook' | 'twitter' | 'instagram';
};

export const FooterSocialLink: FC<Props> = memo(({ link, socialNetwork }) => {
  return (
    <a
      href={link}
      className={`
        footer__social-link
        icon
        icon--contain
        icon--${socialNetwork}
      `}
      target="_blank"
      rel="noreferrer"
    />
  );
});
