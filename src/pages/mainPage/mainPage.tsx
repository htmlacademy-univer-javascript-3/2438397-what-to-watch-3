import { Fragment, ReactElement, useEffect } from 'react';
import {
  FilmPromo,
  FilmPromoProps,
} from '../../components/filmPromo/filmPromo';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterFilms } from '../../helpers/filterFilms';
import { extractAllGenres } from '../../helpers/extractDistinctGenres';
import { FetchFilms } from '../../store/actions';
import { Spinner } from '../../components/spinner/spinner';

export type MainPageProps = {
  filmPromo: FilmPromoProps;
};

export function MainPage({ filmPromo }: MainPageProps): ReactElement {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(FetchFilms());
  }, [dispatch]);

  const { films, currentGenre, filmsIsLoading } = useAppSelector(
    (state) => state,
  );

  const filmsWithRelevantGenre = filterFilms(films, currentGenre);
  const genres = extractAllGenres(films);

  return (
    <Fragment>
      <FilmPromo
        id={filmPromo.id}
        name={filmPromo.name}
        genre={filmPromo.genre}
        releaseDate={filmPromo.releaseDate}
        imgSrc={filmPromo.imgSrc}
        bgImgSrc={filmPromo.bgImgSrc}
      />
      <div className="page-content">
        {filmsIsLoading ? (
          <Spinner />
        ) : (
          <Catalog
            filmsList={filmsWithRelevantGenre}
            genres={genres}
            activeGenre={currentGenre}
          />
        )}
        <Footer />
      </div>
    </Fragment>
  );
}
