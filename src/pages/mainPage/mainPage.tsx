import {Fragment, ReactElement} from 'react';
import {FilmCard} from '../../components/filmCard/filmCard';
import {Catalog} from '../../components/catalog/catalog';
import {Footer} from '../../components/footer/footer';
import {FilmCardProps} from '../../propsTypes/propsTypes';

const FILM_CARD_PROPS: FilmCardProps = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
  imgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  bgImgSrc: 'img/bg-the-grand-budapest-hotel.jpg'
};

export function MainPage() : ReactElement {
  return (
    <Fragment>
      <FilmCard name={FILM_CARD_PROPS.name} genre={FILM_CARD_PROPS.genre} releaseDate={FILM_CARD_PROPS.releaseDate} imgSrc={FILM_CARD_PROPS.imgSrc} bgImgSrc={FILM_CARD_PROPS.bgImgSrc} />
      <div className="page-content">
        <Catalog />,
        <Footer />
      </div>
    </Fragment>
  );
}
