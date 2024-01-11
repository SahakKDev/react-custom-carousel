import { useReducer } from 'react';

import Carousel from './components/Carousel/Carousel';
import MainImage from './components/MainImage/MainImage';

import avatar from './assets/avatar.jpg';
import bourne from './assets/bourne.jpg';
import equalizer from './assets/equalizer.jpg';
import lastSamurai from './assets/last-samurai.jpg';
import shooter from './assets/shooter.jpg';

import { CarouselAction, CarouselActionKind, CarouselState } from './types';
import CarouselActions from './components/Carousel/CarouselActions';

const initialState: CarouselState = {
  loop: true,
  autoslide: false,
  visibleItemsCount: 2,
};

function reducer(state: CarouselState, action: CarouselAction) {
  const { payload, type } = action;

  switch (type) {
    case CarouselActionKind.AUTO_SLIDE:
      return {
        ...state,
        autoslide: payload,
        loop: payload || state.loop,
      };
    case CarouselActionKind.LOOP:
      return {
        ...state,
        loop: payload,
      };
    case CarouselActionKind.VISIBLE_ITEMS_COUNT:
      return {
        ...state,
        visibleItemsCount: payload,
      };

    default:
      return state;
  }
}

const ITEMS = [avatar, bourne, equalizer, lastSamurai, shooter];

function App() {
  const [carouselState, dispatchCarousel] = useReducer(reducer, initialState);

  function carouselLoopHandler() {
    dispatchCarousel({
      payload: !carouselState.loop,
      type: CarouselActionKind.LOOP,
    });
  }

  function carouselAutoSlideHandler() {
    dispatchCarousel({
      payload: !carouselState.autoslide,
      type: CarouselActionKind.AUTO_SLIDE,
    });
  }

  function carouselVisibleItemsCountChange(payload: number) {
    dispatchCarousel({
      payload,
      type: CarouselActionKind.VISIBLE_ITEMS_COUNT,
    });
  }

  return (
    <>
      <Carousel items={ITEMS} {...carouselState}>
        <MainImage />
      </Carousel>
      <CarouselActions
        carouselAutoSlideHandler={carouselAutoSlideHandler}
        carouselLoopHandler={carouselLoopHandler}
        carouselVisibleItemsCountChange={carouselVisibleItemsCountChange}
        maxVisibleItemsCount={ITEMS.length - 1}
        {...carouselState}
      />
    </>
  );
}

export default App;
