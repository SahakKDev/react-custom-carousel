import classes from './slider.module.css';

type Props = {
  children: React.ReactElement[];
  renderButtons: () => React.ReactElement | null;
};

const Slider = ({ children, renderButtons }: Props) => {
  return (
    <div className={classes.slider}>
      {children}
      {renderButtons()}
    </div>
  );
};

export default Slider;
