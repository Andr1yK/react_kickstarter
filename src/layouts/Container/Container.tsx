import { FC, memo } from 'react';

import './Container.scss';

const Container: FC = memo(({ children }) => {
  return <div className="container">{children}</div>;
});

export default Container;
