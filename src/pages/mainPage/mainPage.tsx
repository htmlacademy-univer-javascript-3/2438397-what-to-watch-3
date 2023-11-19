import { Fragment, ReactElement } from 'react';
import {
  FilmPromo,
  FilmPromoProps,
} from '../../components/filmPromo/filmPromo';
import { Catalog } from '../../components/catalog/catalog';
import { Footer } from '../../components/footer/footer';
import {ShortFilmInfo} from '../../types/film';

export type MainPageProps = {
  filmPromo: FilmPromoProps;
  filmsCardList: ShortFilmInfo[];
};

export function MainPage({
  filmPromo,
  filmsCardList,
}: MainPageProps): ReactElement {
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
          needRenderGenres
          needRenderShowMoreButton
          filmsList={filmsCardList}
        />
        ,
        <Footer />
      </div>
    </Fragment>
  );
}
