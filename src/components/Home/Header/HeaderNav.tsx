import { FC, memo } from 'react';
import LangSwicher from '../LangSwicher/LangSwicher';

const HeaderNav: FC = () => {
  return (
    <div className="header__nav">
      <a href="#specs" className="header__link link">
        SPECS
      </a>

      <LangSwicher />

      <a href="cart.html" className="header__buy button button--buy">
        Buy
      </a>
    </div>
  );
};

export default memo(HeaderNav);
