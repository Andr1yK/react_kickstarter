import { memo, FC } from 'react';
import { FooterSocialLink } from './FooterSocialLink';

export const FoterSocial: FC = memo(() => {
  return (
    <div className="footer__social">
      <FooterSocialLink socialNetwork="facebook" link="https://www.facebook.com/hicrazybaby/" />
      <FooterSocialLink socialNetwork="twitter" link="https://twitter.com/crazybabyaudio/" />
      <FooterSocialLink socialNetwork="instagram" link="https://www.instagram.com/crazybaby/" />
    </div>
  );
});
