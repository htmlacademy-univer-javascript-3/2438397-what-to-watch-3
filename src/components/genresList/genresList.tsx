import { ReactElement } from 'react';
import { GenreItem } from './genreItem';

export type GenresListProps = {
  genres: string[];
  activeGenre?: string;
};

export function GenresList({
  genres,
  activeGenre,
}: GenresListProps): ReactElement {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <GenreItem key={genre} name={genre} isActive={genre === activeGenre} />
      ))}
    </ul>
  );
}
