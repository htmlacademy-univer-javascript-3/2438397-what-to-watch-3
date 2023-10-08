import {Fragment, ReactElement} from 'react';
import {FilmPromo} from '../../components/filmPromo/filmPromo';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {FilmPromoProps} from '../../propsTypes/propsTypes';

import {CATALOG_FILMS} from '../../mocks/mocks';

export function MainPage({name, genre, releaseDate, imgSrc, bgImgSrc}: FilmPromoProps) : ReactElement {
  return (
    <Fragment>
      <FilmPromo name={name} genre={genre} releaseDate={releaseDate} imgSrc={imgSrc} bgImgSrc={bgImgSrc} />
      <div className="page-content">
        <Catalog needRenderGenres needRenderShowMoreButton filmsCardsList={CATALOG_FILMS}/>,
        <Footer />
      </div>
    </Fragment>
  );
}
