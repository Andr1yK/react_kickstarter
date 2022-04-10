import { FC, memo } from 'react';
import { useSelector } from '../../../../services/hooks';
import { featuresImage } from '../../../../images';

import Carousel from './Carousel/Carousel';
import Container from '../../../../layouts/Container/Container';

import './Features.scss';
import { GridItem, GridOnDevicePosition } from '../../../../layouts/Grid';
import FeatureBlock from './FeatureBlock/FeatureBlock';

const gridPositions: GridOnDevicePosition[] = [
  {
    tablet: [4, 8],
    desktop: [6, 10],
  },
  {
    tablet: [1, 5],
    desktop: [2, 6],
  },
  {
    tablet: [3, 7],
    desktop: [4, 8],
  },
];

export const Features: FC = memo(() => {
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
          >
            <>
              {features.map((item, index) => (
                <GridItem
                  key={item.id}
                  className={`
                    features__item
                    slider__item
                  `}
                  type="li"
                  fromTablet={gridPositions[index].tablet}
                  fromDesktop={gridPositions[index].desktop}
                >
                  <FeatureBlock featuresBlockItems={item.features} title={item.title} />
                </GridItem>
              ))}
            </>
          </Carousel>
        </div>

        <GridItem
          className="features__image-container"
          fromTablet={[2, 8]}
          fromDesktop={[1, 12]}
        >
          <img
            src={featuresImage}
            alt="crazybaby speaker"
            className="features__image"
          />
        </GridItem>
      </Container>
    </section>
  );
});
