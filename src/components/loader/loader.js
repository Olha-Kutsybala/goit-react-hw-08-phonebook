import { RotatingLines } from 'react-loader-spinner';
import css from './loader.module.css';

const sizes = {
  s: 40,
  m: 60,
  l: 80,
};

export const Loader = ({ size = 'l' }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="#1976d2"
        strokeWidth="4"
        width={sizes[size]}
        animationDuration="1.2"
      />
    </div>
  );
};
