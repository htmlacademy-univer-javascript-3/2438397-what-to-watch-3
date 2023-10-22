import {ReactElement} from 'react';
import {FilmCard} from '../filmCard/filmCard';
import {GenresList} from '../genresList/genresList';
import { useState } from 'react';
import {Film} from '../../types/film';

export type CatalogProps = {
  needRenderGenres: boolean;
  needRenderShowMoreButton: boolean;
  filmsList: Array<Film>;
};

export function Catalog({needRenderGenres, filmsList, needRenderShowMoreButton}: CatalogProps): ReactElement {
  const [, setActiveFilm] = useState<number | null>();

  const genresList = needRenderGenres && <GenresList />;
  const showMoreButton = needRenderShowMoreButton &&
    (
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    );

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {genresList}

      <div className="catalog__films-list">
        <div className="catalog__films-list">
          {filmsList.map((film) => (<FilmCard film={film} key={film.name} onMouseEnter={() => setActiveFilm(film.id)} onMouseLeave={() => setActiveFilm(null)}/>))}
        </div>
      </div>

      {showMoreButton}
    </section>
  );
}
