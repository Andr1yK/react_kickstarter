import { FC, memo } from 'react';
import { useSelector } from '../../../../../hooks';
import { featuresImage } from '../../../../../images';

import Carousel from '../../../../../components/Carousel/Carousel';
import Container from '../../../../../components/Container/Container';

import './FeaturesBlock.scss';

const gridPositions = [
  {
    tablet: 'grid__item--t--4-8',
    desktop: 'grid__item--d--6-10',
  },
  {
    tablet: 'grid__item--t--1-5',
    desktop: 'grid__item--d--2-6',
  },
  {
    tablet: 'grid__item--t--3-7',
    desktop: 'grid__item--d--4-8',
  },
];

type Props = {
  deviceType: {
    onTablet: boolean,
    onDesktop: boolean,
  },
};

export const Features: FC<Props> = memo(({ deviceType }) => {
  const features = useSelector(state => state.features);

  return (
    <section
      id="features"
      className="page__section features"
    >
      <Container>
        <div className="features__content">
          <h2 className="features__title">features</h2>

          <Carousel
            length={3}
            itemWidth={243}
            animationDuration={300}
            deviceType={deviceType}
          >
            <>
              {features.map((item, index) => (
                <li
                  key={item.id}
                  className={`
                    features__item
                    slider__item
                    ${gridPositions[index].tablet}
                    ${gridPositions[index].desktop}
                  `}
                >
                  <h4 className="features__item-title">{item.title}</h4>
                  <ul className="features__list">
                    {item.features.map((feature) => (
                      <li key={feature.id} className="features__list-item">
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </>
          </Carousel>
        </div>

        <div
          className="
            features__image-container
            grid__item--d--1-12
            grid__item--t--2-8
          "
        >
          <img
            src={featuresImage}
            alt="crazybaby speaker"
            className="features__image"
          />
        </div>
      </Container>
    </section>
  );
});
