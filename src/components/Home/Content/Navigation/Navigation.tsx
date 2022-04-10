import { FC, memo } from 'react';
import Container from '../../../../layouts/Container/Container';
import NavList from '../../NavList/NavList';

const Navigation: FC = memo(() => (
  <section className="navigation page__section page__section--nav ">
    <Container>
      <NavList blockName="navigation" />
    </Container>
  </section>
));

export default Navigation;
