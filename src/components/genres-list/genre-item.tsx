import { ReactElement } from 'react';
import { useAppDispatch } from '../../hooks';
import { SetGenre } from '../../store/all-films/all-films';

export type GenreItemProps = {
  name: string;
  isActive: boolean;
};

export function GenreItem({ name, isActive }: GenreItemProps): ReactElement {
  const dispatch = useAppDispatch();

  return (
    <li
      className={`catalog__genres-item ${
        isActive ? 'catalog__genres-item--active' : ''
      }`}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={(event) => {
          event.preventDefault();
          dispatch(SetGenre(name));
        }}
      >
        {name}
      </a>
    </li>
  );
}
