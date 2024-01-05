import { ReactElement, useState } from 'react';

import { ShowMoreButton } from './show-more-button';
import { FilmCard } from '../film-card/film-card';
import { GenresList } from '../genres-list/genres-list';
import { ShortFilmInfo } from '../../types/film';

export type CatalogProps = {
  filmsList: ShortFilmInfo[];
  genres?: string[];
  activeGenre?: string;
};

const FILMS_PER_PAGE = 8;

export function Catalog({
  filmsList,
  genres,
  activeGenre,
}: CatalogProps): ReactElement {
  const [, setActiveFilm] = useState<string | null>();
  const [visibleFilmsCount, setVisibleFilmsCount] =
    useState<number>(FILMS_PER_PAGE);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {genres !== undefined && (
        <GenresList genres={genres} activeGenre={activeGenre} />
      )}

      <div className="catalog__films-list">
        {filmsList.slice(0, visibleFilmsCount).map((film) => (
          <FilmCard
            film={film}
            key={film.id}
            onMouseEnter={() => setActiveFilm(film.id)}
            onMouseLeave={() => setActiveFilm(null)}
          />
        ))}
      </div>

      {visibleFilmsCount < filmsList.length && (
        <ShowMoreButton
          onClick={() =>
            setVisibleFilmsCount(visibleFilmsCount + FILMS_PER_PAGE)}
        />
      )}
    </section>
  );
}
