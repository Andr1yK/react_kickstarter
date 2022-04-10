import { FC, memo } from 'react';
import Container from '../../../../layouts/Container/Container';
import { Grid, GridItem } from '../../../../layouts/Grid';

import './AboutUs.scss';
import { design, design1024w, design768w } from './images';

export const AboutUs: FC = memo(() => {
  return (
    <section
      id="about-us"
      className="page__section about"
    >
      <Container>
        <div className="about__content">
          <Grid flexOnMobile className="about__content">
            <GridItem
              className="about__image-container"
              fromTablet={[1, 4]}
              fromDesktop={[2, 7]}
            >
              <img
                className="about__image"
                srcSet={`
                  ${design768w} 768w,
                  ${design1024w} 1024w
                `}
                src={design}
                alt="DESIGNED FOR THE FUTURE"
              />
            </GridItem>

            <GridItem
              className="about__title"
              fromTablet={[4, 8]}
              fromDesktop={[7, 11]}
              htmlTag="h2"
            >
              DESIGNED FOR THE FUTURE
            </GridItem>

            <GridItem
              className="about__text"
              fromTablet={[5, 8]}
              fromDesktop={[8, 11]}
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
                target="_blank"
                rel="noreferrer"
              >
                see more about us
              </a>
            </GridItem>
          </Grid>
        </div>
      </Container>
    </section>
  );
});
