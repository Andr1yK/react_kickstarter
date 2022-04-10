/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FC, memo, useCallback, useEffect, useState,
} from 'react';
import { throttle } from '../../../services/helpers/throttle';
import './GoTopButton.scss';

export const GoTopButton: FC = memo(() => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => setScrollPosition(window.scrollY), 250);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`go-top page__go-top container ${scrollPosition > 700 && 'go-top--visible'}`}
    >
      <div className="go-top__button">
        <button
          type="button"
          onClick={scrollToTop}
          className="
          go-top__link
          icon
          icon--contain
          icon--go-top
          "
        />
      </div>
    </div>
  );
});
