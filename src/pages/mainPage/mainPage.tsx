import { Fragment, ReactElement } from 'react';
import {
  FilmPromo,
  FilmPromoProps,
} from '../../components/filmPromo/filmPromo';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { filterFilms } from '../../helpers/filterFilms';
import { extractAllGenres } from '../../helpers/extractDistinctGenres';

export type MainPageProps = {
  filmPromo: FilmPromoProps;
};

export function MainPage({ filmPromo }: MainPageProps): ReactElement {
  const { films, currentGenre } = useAppSelector((state) => state);
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
        <Catalog
          needRenderShowMoreButton
          filmsList={filmsWithRelevantGenre}
          genres={genres}
          activeGenre={currentGenre}
        />
        <Footer />
      </div>
    </Fragment>
  );
}
