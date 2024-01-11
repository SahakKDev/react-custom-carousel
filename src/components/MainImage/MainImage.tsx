import classes from './mainImage.module.css';

export type ChildProps = {
  src?: string;
};

const MainImage = (props: ChildProps) => {
  if (!props.src) return null;

  return (
    <div className={classes.mainImage}>
      <img {...props} alt="Poster" />
    </div>
  );
};

export default MainImage;
