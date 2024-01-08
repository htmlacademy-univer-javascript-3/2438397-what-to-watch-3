import { Fragment, ReactElement } from 'react';
import { FilmPromo } from '../../components/film-promo/film-promo';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { useFilms } from '../../hooks';
import { filterFilms } from '../../helpers/filter-films';
import { extractAllGenres } from '../../helpers/extract-distinct-genres';
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
            maxFilmsCount={8}
          />
        </Spinner>
        <Footer />
      </div>
    </Fragment>
  );
}
