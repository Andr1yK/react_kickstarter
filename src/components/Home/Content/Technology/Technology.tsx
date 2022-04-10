import { FC, memo } from 'react';
import Container from '../../../../layouts/Container/Container';
import { Grid, GridItem } from '../../../../layouts/Grid';
import { technology, technology1024w, technology768w } from './images';
import './Technology.scss';
import TechnologyQuotes from './TechnologyQuotes';

export const Technology: FC = memo(() => {
  return (
    <section
      id="technology"
      className="page__section technology"
    >
      <Container>
        <Grid className="technology__content" fromDesktop>
          <GridItem
            className="technology__title"
            fromDesktop={[2, 4]}
            type="h2"
          >
            technology
          </GridItem>

          <GridItem className="technology__image-container" fromDesktop={[1, 12]}>
            <img
              srcSet={`
                ${technology768w} 768w,
                ${technology1024w} 1024w
              `}
              src={technology}
              alt="technology"
              className="technology__image"
            />
          </GridItem>

          <GridItem className="technology__quotes-container" fromDesktop={[3, 10]}>
            <TechnologyQuotes />
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
});
