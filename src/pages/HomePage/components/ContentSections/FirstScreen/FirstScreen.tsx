import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { headerImage } from '../../../../../images';
import Container from '../../../../../components/Container/Container';
import './FirstScreen.scss';

export const FirstScreen: FC = memo(() => {
  return (
    <section className="page__section first-screen">
      <Container>
        <div
          className="
            first-screen__content
            grid
            grid--mobile-flex
          "
        >
          <div
            className="
              grid__item
              grid__item--t--1-3
              grid__item--d--1-4
              first-screen__text
            "
          >
            <h1 className="first-screen__title">
              Futuristic Wireless Speaker
              <Link
                to="cart"
                className="first-screen__cart"
              >
                <span className="icon icon--contain icon--cart" />
              </Link>
            </h1>

            <p className="first-screen__description">
              Luna&apos;s performance is balanced and smooth in all frequency
              ranges which makes the music both naturally pleasant and
              distinctly more layered.
            </p>
          </div>

          <div
            className="
              grid__item
              grid__item--t--4-8
              grid__item--d--5-12
              first-screen__image-conatiner
            "
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
          </div>
        </div>
      </Container>
    </section>
  );
});
