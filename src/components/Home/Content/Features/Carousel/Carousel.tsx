/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FC,
  ReactChild,
  useEffect,
  useState,
  memo,
  useRef,
} from 'react';
import { Grid } from '../../../../../layouts/Grid';
import { useDeviceTypeState } from '../../../../../services/contexts/DeviceTypeContext';
import './Carousel.scss';

type Props = {
  length: number,
  step?: number,
  frameSize?: number,
  itemWidth: number,
  animationDuration?: number,
  infinite?: boolean,
  children: ReactChild,
};

const Carousel: FC<Props> = ({
  length,
  step = 1,
  frameSize = 1,
  itemWidth,
  animationDuration = 300,
  infinite = false,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceType = useDeviceTypeState();

  const timersId = useRef<NodeJS.Timeout[]>([]);
  let currentAnimationDuration: number = animationDuration;

  useEffect(() => () => timersId.current.forEach(clearTimeout), [timersId]);

  const invisibleScroll = (startIndex: number, endIndex: number, newAnimationDuration: number) => {
    timersId.current.push(setTimeout(() => {
      currentAnimationDuration = 0;
      setCurrentIndex(startIndex);
    }, 0));

    timersId.current.push(setTimeout(() => {
      currentAnimationDuration = newAnimationDuration;
      setCurrentIndex(endIndex);
    }, 100));
  };

  const prevSlide = () => {
    const newIndex: number = currentIndex - step;

    if (newIndex <= 0 && infinite) {
      const startIndex = length + newIndex;

      invisibleScroll(
        startIndex + step,
        startIndex,
        currentAnimationDuration,
      );
    }

    setCurrentIndex(newIndex > 0 ? newIndex : 0);
  };

  const nextSlide = () => {
    const newIndex: number = currentIndex + step;
    const lastIndex = length - frameSize;

    const swapIndex = length + step + (currentIndex % 2) - frameSize * +(frameSize === 1);

    if (newIndex >= swapIndex && infinite) {
      const startIndex = (currentIndex % 2) + (newIndex - swapIndex) * +(frameSize !== 1);

      invisibleScroll(
        startIndex,
        step + startIndex,
        currentAnimationDuration,
      );
    }

    setCurrentIndex(!infinite && newIndex > lastIndex ? lastIndex : newIndex);
  };

  return (
    <>
      <div
        className="slider features__slider"
        style={{
          width: deviceType.onTablet ? 'auto' : frameSize * itemWidth,
        }}
      >
        <Grid
          className="slider__items features__items"
          flexOnMobile
          type="ul"
          style={{
            transition: `transform ${currentAnimationDuration}ms`,
            transform: `translateX(-${currentIndex * itemWidth}px)`,
            width: deviceType.onTablet ? 'auto' : length * itemWidth,
          }}
        >
          {children}
        </Grid>
      </div>

      {!deviceType.onTablet && (
        <div className="slider__control">
          <div className="slider__buttons">
            <button
              type="button"
              className="slider__prev-button"
              onClick={prevSlide}
            />

            <button
              type="button"
              className="slider__next-button"
              onClick={nextSlide}
            />

            <div className="slider__page-num">
              <span className="slider__page-current">{`0${currentIndex + 1}`}</span>
              {' / '}
              <span className="slider__page-last">03</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Carousel);
