import { FC, memo } from 'react';
import Container from '../../../../layouts/Container/Container';
import './Benefits.scss';
import { Grid } from '../../../../layouts/Grid';
import BenefitItem from './BenefitItem';
import { IBenefit } from './types/IBenefit';
import {
  calipers, speaker, wifi, sun,
} from './images';

const benefitsList: IBenefit[] = [
  {
    id: 1,
    gridPosition: {
      tablet: [1, 4],
      desktop: [1, 3],
    },
    imageUrl: calipers,
    title: 'Futuristic Design',
    // eslint-disable-next-line max-len
    discription: 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',
  },
  {
    id: 2,
    gridPosition: {
      tablet: [5, 8],
      desktop: [4, 6],
    },
    imageUrl: speaker,
    title: 'Tweeter Speaker System',
    // eslint-disable-next-line max-len
    discription: 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',
  },
  {
    id: 3,
    gridPosition: {
      tablet: [1, 4],
      desktop: [7, 9],
    },
    imageUrl: wifi,
    title: 'Multiroom System',
    // eslint-disable-next-line max-len
    discription: 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',
  },
  {
    id: 4,
    gridPosition: {
      tablet: [5, 8],
      desktop: [10, 12],
    },
    imageUrl: sun,
    title: 'Intuitive Lighting System',
    // eslint-disable-next-line max-len
    discription: 'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation',
  },
];

export const Benefits: FC = memo(() => (
  <section
    id="specs"
    className="page__section benefits page__section--benefits"
  >
    <Container>
      <Grid className="benefits__content" fromTablet>
        {benefitsList.map(({
          discription, gridPosition, imageUrl, title, id,
        }) => (
          <BenefitItem
            key={id}
            discription={discription}
            gridPosition={gridPosition}
            imageUrl={imageUrl}
            title={title}
          />
        ))}
      </Grid>
    </Container>
  </section>
));
