import { FC, memo } from 'react';
import { technology, martin } from '../../../../../images';
import Container from '../../../../../components/Container/Container';
import './Technology.scss';

export const Technology: FC = memo(() => {
  return (
    <section
      id="technology"
      className="page__section technology"
    >
      <Container>
        <div className="technology__content grid grid--desktop">
          <h2 className="technology__title grid__item grid__item--d--2-4">
            technology
          </h2>
          <div className="technology__image-container grid__item grid__item--d--1-12">
            <img
              src={technology}
              alt="technology"
              className="technology__image"
            />
          </div>

          <div
            className="
                technology__quotes-container
                grid__item
                grid__item--d--3-10
              "
          >
            <p className="technology__quotes-text ">
              It really took me by surprise honestly to have such full
              beautiful sound that coming out of this small compact device.
              And with the brush aluminum surface, it feels so familiar. Like
              my iPhone.
            </p>

            <div className="technology__quotes-author">
              <div className="technology__quotes-image-container">
                <img
                  className="technology__quotes-image"
                  src={martin}
                  alt="Creative director Garrett Martin"
                />
              </div>

              <h4 className="technology__quotes-name">Garrett Martin</h4>

              <div className="technology__quotes-rank">Creative Director</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
});
