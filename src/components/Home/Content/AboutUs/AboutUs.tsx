import { FC, memo } from 'react';
import { design } from '../../../../images';
import Container from '../../../../layouts/Container/Container';

import './AboutUs.scss';

export const AboutUs: FC = memo(() => {
  return (
    <section
      id="about-us"
      className="page__section about"
    >
      <Container>
        <div className="about__content">
          <div className="about__content grid grid--mobile-flex">
            <div
              className="
              about__image-container
              grid__item
              grid__item--t--1-4
              grid__item--d--2-7
              "
            >
              <img
                className="about__image"
                //   srcSet="
                //   ./images/design-320w.jpg 320w,
                //   ./images/design-768w.jpg 768w,
                //   ./images/design-1024w.jpg 1024w
                // "
                //   sizes="
                //   (min-width: 320px) 320px
                //   (min-width: 768px) 748px,
                //   968px
                // "
                src={design}
                alt="DESIGNED FOR THE FUTURE"
              />
            </div>

            <h2
              className="
                about__title
                grid__item
                grid__item--t--4-8
                grid__item--d--7-11
              "
            >
              DESIGNED FOR THE FUTURE
            </h2>

            <div
              className="
                about__text
                grid__item
                grid__item--t--5-8
                grid__item--d--8-11
              "
            >
              <p className="about__description">
                In 2014, a group of geeky industrial designers, engineering
                veterans and acoustic experts formed crazybaby. This is a
                bunch of passionate people who are crazy enough to think they
                can challenge the industry with disruptive audio products.
              </p>

              <a
                className="
                  link
                  link--green
                  link--bottom-line
                  about__link
                "
                href="https://crazybaby.com/"
              >
                see more about us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});
