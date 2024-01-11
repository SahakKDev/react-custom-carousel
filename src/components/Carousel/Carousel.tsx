import { Children, cloneElement, useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import Slide from '../Slider/Slide';
import SliderButtons from '../Slider/SliderButtons';

import { sliderLeftBtnClick, sliderRightBtnClick } from '../../helpers';
import { ChildProps } from '../MainImage/MainImage';
import classes from './carousel.module.css';

type Props = {
  items: Array<string>;
  visibleItemsCount?: number;
  autoslide?: boolean;
  loop?: boolean;
  children?: React.ReactNode;
};

const Carousel = ({
  items,
  visibleItemsCount = 2,
  autoslide,
  loop,
  children,
}: Props) => {
  const [selectedItemUrl, setSelectedItemUrl] = useState<string>();
  const [visibleItems, setVisibleItems] = useState({
    currentItemsIndexes: new Array(visibleItemsCount)
      .fill(0)
      .map((_, index) => index),
    disableLeftClick: false,
    disableRightClick: false,
  });
  const { disableLeftClick, disableRightClick, currentItemsIndexes } =
    visibleItems;

  const currentItems: string[] = [];

  for (const currentIndex of currentItemsIndexes) {
    currentItems.push(items[currentIndex]);
  }

  useEffect(() => {
    setVisibleItems((prev) => ({
      ...prev,
      currentItemsIndexes: new Array(visibleItemsCount)
        .fill(0)
        .map((_, index) => index),
    }));
  }, [visibleItemsCount]);

  useEffect(() => {
    if (autoslide) {
      let timerId = setInterval(() => {
        setVisibleItems(({ currentItemsIndexes, ...others }) => {
          return {
            ...others,
            ...sliderRightBtnClick(currentItemsIndexes, items, 1, true),
          };
        });
      }, 3000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [autoslide, items]);

  function onLeftBtnClick() {
    setVisibleItems(({ currentItemsIndexes }) => {
      return {
        disableRightClick: false,
        ...sliderLeftBtnClick(
          currentItemsIndexes,
          items,
          visibleItemsCount,
          loop,
        ),
      };
    });
  }

  function onRightBtnClick() {
    setVisibleItems(({ currentItemsIndexes }) => {
      return {
        disableLeftClick: false,
        ...sliderRightBtnClick(
          currentItemsIndexes,
          items,
          visibleItemsCount,
          loop,
        ),
      };
    });
  }

  function handleSelectItem(url: string) {
    setSelectedItemUrl(url);
  }

  return (
    <div className={classes.carousel}>
      {Children.map(children as React.ReactElement<ChildProps>, (child) =>
        cloneElement(child, { src: selectedItemUrl }),
      )}
      <Slider
        renderButtons={() =>
          !autoslide ? (
            <SliderButtons
              disableLeftClick={disableLeftClick}
              disableRightClick={disableRightClick}
              onLeftBtnClick={onLeftBtnClick}
              onRightBtnClick={onRightBtnClick}
            />
          ) : null
        }
      >
        {currentItems.map((url) => (
          <Slide
            key={url}
            selected={selectedItemUrl === url}
            src={url}
            onSelect={() => handleSelectItem(url)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
