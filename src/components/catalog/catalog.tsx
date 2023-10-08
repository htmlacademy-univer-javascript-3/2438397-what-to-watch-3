import {ReactElement} from 'react';
import {FilmCard} from '../filmCard/filmCard';
import {CatalogProps} from '../../propsTypes/propsTypes';
import {GenresList} from '../genresList/genresList';

export function Catalog({needRenderGenres, filmsCardsList, needRenderShowMoreButton}: CatalogProps): ReactElement {
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
          {filmsCardsList.map((film) => (<FilmCard key={film.name} name={film.name} filmLink={film.filmLink} imgSrc={film.imgSrc} />))}
        </div>
      </div>

      {showMoreButton}
    </section>
  );
}
