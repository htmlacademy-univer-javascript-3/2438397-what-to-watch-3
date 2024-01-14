import { ReactElement } from 'react';
import { GenreItem } from './genre-item';

const MAX_GENRES_COUNT = 9;

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
      {genres.slice(0, MAX_GENRES_COUNT).map((genre) => (
        <GenreItem key={genre} name={genre} isActive={genre === activeGenre} />
      ))}
    </ul>
  );
}
