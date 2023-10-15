import {Fragment, ReactElement} from 'react';
import {FilmPromo} from '../../components/filmPromo/filmPromo';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';

import {MainPageProps} from '../../propsTypes/pagesProsTypes';

export function MainPage({filmPromo, filmsCardList}: MainPageProps) : ReactElement {
  return (
    <Fragment>
      <FilmPromo name={filmPromo.name} genre={filmPromo.genre} releaseDate={filmPromo.releaseDate} imgSrc={filmPromo.imgSrc} bgImgSrc={filmPromo.bgImgSrc} />
      <div className="page-content">
        <Catalog needRenderGenres needRenderShowMoreButton filmsCardsList={filmsCardList}/>,
        <Footer />
      </div>
    </Fragment>
  );
}
