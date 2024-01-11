import clsx from 'clsx';

import classes from './slide.module.css';

type Props = {
  src: string;
  selected: boolean;
  onSelect: () => void;
};

const Slide = ({ onSelect, selected, ...props }: Props) => {
  return (
    <div
      className={clsx(classes.slide, selected ? classes.selected : '')}
      onClick={onSelect}
    >
      <img {...props} alt="Poster" className={classes.image} />
    </div>
  );
};

export default Slide;
