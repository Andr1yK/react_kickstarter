import { FC, memo } from 'react';
import Container from '../../../../layouts/Container/Container';
import { Grid, GridItem } from '../../../../layouts/Grid';

import './ContactUs.scss';
import { ContactUsFrom } from './ContactUsFrom';

export const ContactUs: FC = memo(() => {
  return (
    <section
      id="contact-us"
      data-sect-name="contact-us-mob"
      className="page__section contact"
    >
      <Container>
        <div className="contact__content">
          <Grid fromTablet>
            <GridItem
              className="contact__title"
              fromTablet={[1, 4]}
              fromDesktop={[2, 6]}
            >
              DO YOU HAVE ANY QUESTIONS?
            </GridItem>

            <GridItem fromTablet={[5, 8]} fromDesktop={[7, 11]}>
              <ContactUsFrom />
            </GridItem>
          </Grid>
        </div>
      </Container>
    </section>
  );
});
