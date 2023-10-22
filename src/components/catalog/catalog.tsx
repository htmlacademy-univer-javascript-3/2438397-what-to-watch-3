import {ReactElement} from 'react';
import {FilmCard, FilmCardProps} from '../filmCard/filmCard';
import {GenresList} from '../genresList/genresList';
import { useState } from 'react';

export type CatalogProps = {
  needRenderGenres: boolean;
  needRenderShowMoreButton: boolean;
  filmsCardsList: Array<FilmCardProps>;
};
export function Catalog({needRenderGenres, filmsCardsList, needRenderShowMoreButton}: CatalogProps): ReactElement {
  const [, setActiveFilm] = useState<number | null>();

  const genresList = needRenderGenres ? <GenresList /> : '';
  const showMoreButton = needRenderShowMoreButton ?
    (
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    ) : '';

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {genresList}

      <div className="catalog__films-list">
        <div className="catalog__films-list">
          {filmsCardsList.map((film) => (<FilmCard id={film.id} key={film.name} name={film.name} imgSrc={film.imgSrc} onMouseEnter={() => setActiveFilm(film.id)} onMouseLeave={() => setActiveFilm(null)}/>))}
        </div>
      </div>

      {showMoreButton}
    </section>
  );
}
