import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import LangSwicher from '../LangSwicher/LangSwicher';

const HeaderNav: FC = () => {
  return (
    <div className="header__nav">
      <a href="#specs" className="header__link link">
        SPECS
      </a>

      <LangSwicher />

      <Link to="cart" className="header__buy button button--buy">
        Buy
      </Link>
    </div>
  );
};

export default memo(HeaderNav);
