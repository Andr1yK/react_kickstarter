import { FC, memo } from 'react';
import { headerImage } from '../../../../images';
import Container from '../../../../layouts/Container/Container';
import { Grid, GridItem } from '../../../../layouts/Grid';
import './FirstScreen.scss';

export const FirstScreen: FC = memo(() => {
  return (
    <section className="page__section first-screen">
      <Container>
        <Grid className="first-screen__content" flexOnMobile>
          <GridItem
            className="first-screen__text"
            fromTablet={[1, 3]}
            fromDesktop={[1, 4]}
          >
            <h1 className="first-screen__title">
              Futuristic Wireless Speaker
              <a
                href="cart.html"
                className="
                  first-screen__cart
                "
              >
                <span className="icon icon--contain icon--cart" />
              </a>
            </h1>

            <p className="first-screen__description">
              Luna&apos;s performance is balanced and smooth in all frequency
              ranges which makes the music both naturally pleasant and
              distinctly more layered.
            </p>
          </GridItem>

          <GridItem
            className="first-screen__image-conatiner"
            fromTablet={[4, 8]}
            fromDesktop={[5, 12]}
          >
            <img
              className="first-screen__image"
              //   srcSet="
              //   ./images/header-320w.png 320w,
              //   ./images/header-768w.png 768w,
              //   ./images/header-1024w.png 1024w
              // "
              //   sizes="
              //   (min-width: 768px) 90vw,
              //   300px
              // "
              src={headerImage}
              alt="Futuristic Wireless Speaker"
            />
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
});
