import { Fragment, ReactElement } from 'react';
import { FilmPromo } from '../../components/filmPromo/filmPromo';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { useFilms } from '../../hooks';
import { filterFilms } from '../../helpers/filterFilms';
import { extractAllGenres } from '../../helpers/extractDistinctGenres';
import { Spinner } from '../../components/spinner/spinner';

export function MainPage(): ReactElement {
  const { data: films, currentGenre, isLoading } = useFilms();

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
          />
        </Spinner>
        <Footer />
      </div>
    </Fragment>
  );
}
