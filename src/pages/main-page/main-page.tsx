import { Fragment, ReactElement } from 'react';
import { FilmPromo } from '../../components/film-promo/film-promo';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { useFilms } from '../../hooks';
import { filterFilms } from '../../helpers/filter-films';
import { extractAllGenres } from '../../helpers/extract-distinct-genres';
import { Spinner } from '../../components/spinner/spinner';

const MAX_FILMS_CARDS_CONT = 8;

export function MainPage(): ReactElement {
  const { films, currentGenre, isLoading } = useFilms();

  const filmsWithRelevantGenre = filterFilms(films, currentGenre);
  const genres = extractAllGenres(films);

  return (
    <Fragment>
      <FilmPromo />
      <div className="page-content">
        <Spinner isLoading={isLoading}>
          <Catalog
            filmsList={filmsWithRelevantGenre}
            genres={genres}
            activeGenre={currentGenre}
            maxFilmsCount={MAX_FILMS_CARDS_CONT}
          />
        </Spinner>
        <Footer />
      </div>
    </Fragment>
  );
}
