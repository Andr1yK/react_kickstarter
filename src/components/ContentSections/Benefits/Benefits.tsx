import { FC, memo } from 'react';
import Container from '../../Container/Container';
import {
  calipers, speaker, wifi, sun,
} from '../../../images';
import './Benefits.scss';

export const Benefits: FC = memo(() => {
  return (
    <section
      id="specs"
      className="page__section benefits page__section--benefits"
    >
      <Container>
        <div className="benefits__content grid grid--tablet">
          <div
            className="
              grid__item
              grid__item--t--1-4
              grid__item--d--1-3
              benefits__item
            "
          >
            <img
              src={calipers}
              alt="Futuristic Design"
              className="benefits__icon"
            />
            <h2 className="benefits__title">Futuristic Design</h2>
            <p className="benefits__discription">
              To give Luna a truly flawless look, we specifically picked
              aircraft grade aluminum as its material and adopted both
              three-dimensional stretch-bending technology and a high
              precision cold forging technique.
            </p>
          </div>

          <div
            className="
              grid__item
              grid__item--t--5-8
              grid__item--d--4-6
              benefits__item
            "
          >
            <img
              src={speaker}
              alt="Tweeter Speaker System"
              className="benefits__icon"
            />
            <h2 className="benefits__title">Tweeter Speaker System</h2>
            <p className="benefits__discription">
              To deliver a more layered sound performance better than a sole
              full-range speaker, our team equipped Luna with one more tweeter
              speaker responsible for high-frequency sound independently.
            </p>
          </div>

          <div
            className="
              grid__item
              grid__item--t--1-4
              grid__item--d--7-9
              benefits__item
            "
          >
            <img
              src={wifi}
              alt="Multiroom System"
              className="benefits__icon"
            />
            <h2 className="benefits__title">Multiroom System</h2>
            <p className="benefits__discription">
              Luna is natively compatible with your home Wi-Fi. Set up
              multiple speakers in different rooms to expand your music
              experience into the entire house.
            </p>
          </div>

          <div
            className="
              grid__item
              grid__item--t--5-8
              grid__item--d--10-12
              benefits__item
            "
          >
            <img
              src={sun}
              alt="Intuitive Lighting System"
              className="benefits__icon"
            />
            <h2 className="benefits__title">Intuitive Lighting System</h2>
            <p className="benefits__discription">
              An intuitive user interface allows you to adjust the hue and
              saturation of color for lighting that fits any mood and
              situation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
});
