import {Fragment, ReactElement} from 'react';
import {FilmPromo} from '../../components/filmPromo/filmPromo';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {CATALOG_FILMS, FILM_PROMO_PROPS} from '../../mocks/mocks';

export function MainPage() : ReactElement {
  return (
    <Fragment>
      <FilmPromo name={FILM_PROMO_PROPS.name} genre={FILM_PROMO_PROPS.genre} releaseDate={FILM_PROMO_PROPS.releaseDate} imgSrc={FILM_PROMO_PROPS.imgSrc} bgImgSrc={FILM_PROMO_PROPS.bgImgSrc} />
      <div className="page-content">
        <Catalog needRenderGenres needRenderShowMoreButton filmsCardsList={CATALOG_FILMS}/>,
        <Footer />
      </div>
    </Fragment>
  );
}
