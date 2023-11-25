import { ReactElement } from 'react';
import { FilmCard } from '../filmCard/filmCard';
import { GenresList } from '../genresList/genresList';
import { useState } from 'react';
import {ShortFilmInfo} from '../../types/film';

export type CatalogProps = {
  needRenderShowMoreButton: boolean;
  filmsList: ShortFilmInfo[];
  genres?: string[];
  activeGenre?: string;
};

export function Catalog({
  filmsList,
  needRenderShowMoreButton,
  genres,
  activeGenre,
}: CatalogProps): ReactElement {
  const [, setActiveFilm] = useState<number | null>();

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {genres !== undefined && <GenresList genres={genres} activeGenre={activeGenre}/>}

      <div className="catalog__films-list">
        {filmsList.map((film) => (
          <FilmCard
            film={film}
            key={film.id}
            onMouseEnter={() => setActiveFilm(film.id)}
            onMouseLeave={() => setActiveFilm(null)}
          />
        ))}
      </div>

      {needRenderShowMoreButton && (
        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
