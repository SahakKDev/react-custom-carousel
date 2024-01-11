import clsx from 'clsx';
import classes from './carouselActions.module.css';

type Props = {
  carouselLoopHandler: () => void;
  carouselAutoSlideHandler: () => void;
  carouselVisibleItemsCountChange: (num: number) => void;
  maxVisibleItemsCount: number;
  loop: boolean;
  autoslide: boolean;
  visibleItemsCount: number;
};

const CarouselActions = ({
  carouselAutoSlideHandler,
  carouselLoopHandler,
  carouselVisibleItemsCountChange,
  maxVisibleItemsCount,
  autoslide,
  loop,
  visibleItemsCount,
}: Props) => {
  return (
    <div className={classes.root}>
      <button onClick={carouselLoopHandler} className={classes.right}>
        {loop ? 'disable' : 'enable'} infinite loop
      </button>
      <button onClick={carouselAutoSlideHandler}>
        {autoslide ? 'disable' : 'enable'} autoslide
      </button>

      <div className={clsx(classes.center, classes.selectContainer)}>
        <label htmlFor="count">Visible Items Count</label>
        <select
          id="count"
          value={visibleItemsCount}
          onChange={(e) => carouselVisibleItemsCountChange(+e.target.value)}
        >
          {new Array(maxVisibleItemsCount).fill(0).map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarouselActions;
