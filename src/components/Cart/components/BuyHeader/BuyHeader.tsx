/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../layouts/Logo/Logo';
import Bullet from './Bullet';

import style from './BuyHeader.module.scss';

type Props = {
  className?: string,
};

export const BuyHeader: FC<Props> = memo(({ className = '' }) => {
  return (
    <header className={`${className} ${style.buy}`}>
      <Logo className={style.buy__logo} />

      <div className={style.buy__back}>
        <Link to="/" className="icon icon--left-arrow" />
      </div>

      <div className={style.buy__cross}>
        <Link to="/" className="icon icon--cross-grey" />
      </div>

      <div className={style.buy__bullets}>
        <Bullet text="Cart" active />

        <Bullet text="SHIPPING" />

        <Bullet text="PAYMENT" />
      </div>
    </header>
  );
});
