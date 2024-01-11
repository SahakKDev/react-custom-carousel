import clsx from 'clsx';

import classes from './slliderButtons.module.css';

type Props = {
  onLeftBtnClick: () => void;
  onRightBtnClick: () => void;
  disableLeftClick: boolean;
  disableRightClick: boolean;
};

const SliderButtons = ({
  onLeftBtnClick,
  onRightBtnClick,
  disableLeftClick,
  disableRightClick,
}: Props) => {
  return (
    <>
      <button
        onClick={onLeftBtnClick}
        className={clsx(classes.sliderBtn, classes.sliderBtn__left)}
        disabled={disableLeftClick}
      >
        &larr;
      </button>
      <button
        onClick={onRightBtnClick}
        className={clsx(classes.sliderBtn, classes.sliderBtn__right)}
        disabled={disableRightClick}
      >
        &rarr;
      </button>
    </>
  );
};

export default SliderButtons;
