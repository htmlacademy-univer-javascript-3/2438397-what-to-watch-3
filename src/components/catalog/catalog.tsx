import {ReactElement} from 'react';
import {SmallFilmCardProps} from '../../propsTypes/propsTypes.tsx';
import {SmallFilmCard} from '../smallFilmCard/smallFilmCard';

const FILMS: SmallFilmCardProps[] = [
  {
    name:'Fantastic Beasts: The Crimes of Grindelwald',
    filmLink:'film-page.html',
    imgSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    name:'Bohemian Rhapsody',
    filmLink:'film-page.html',
    imgSrc: 'img/bohemian-rhapsody.jpg'
  },
  {
    name:'Macbeth',
    filmLink:'film-page.html',
    imgSrc: 'img/macbeth.jpg'
  },
  {
    name:'Aviator',
    filmLink:'film-page.html',
    imgSrc: 'img/aviator.jpg'
  },
  {
    name:'We need to talk about Kevin',
    filmLink:'film-page.html',
    imgSrc: 'img/we-need-to-talk-about-kevin.jpg'
  },
  {
    name:'What We Do in the Shadows',
    filmLink:'film-page.html',
    imgSrc: 'img/what-we-do-in-the-shadows.jpg'
  },
  {
    name:'Revenant',
    filmLink:'film-page.html',
    imgSrc: 'img/revenant.jpg'
  },
  {
    name:'Johnny English',
    filmLink:'film-page.html',
    imgSrc: 'img/johnny-english.jpg'
  },
  {
    name:'Shutter Island',
    filmLink:'film-page.html',
    imgSrc: 'img/shutter-island.jpg'
  },
  {
    name:'Pulp Fiction',
    filmLink:'film-page.html',
    imgSrc: 'img/pulp-fiction.jpg'
  },
  {
    name:'No Country for Old Men',
    filmLink:'film-page.html',
    imgSrc: 'img/no-country-for-old-men.jpg'
  },
  {
    name:'Snatch',
    filmLink:'film-page.html',
    imgSrc: 'img/snatch.jpg'
  },
  {
    name:'Moonrise Kingdom',
    filmLink:'film-page.html',
    imgSrc: 'img/moonrise-kingdom.jpg'
  },
  {
    name:'Seven Years in Tibet',
    filmLink:'film-page.html',
    imgSrc: 'img/seven-years-in-tibet.jpg'
  },
  {
    name:'Midnight Special',
    filmLink:'film-page.html',
    imgSrc: 'img/midnight-special.jpg'
  },
  {
    name:'War of the Worlds',
    filmLink:'film-page.html',
    imgSrc: 'img/war-of-the-worlds.jpg'
  },
  {
    name:'Dardjeeling Limited',
    filmLink:'film-page.html',
    imgSrc: 'img/dardjeeling-limited.jpg'
  },
  {
    name:'Orlando',
    filmLink:'film-page.html',
    imgSrc: 'img/orlando.jpg'
  },
  {
    name:'Mindhunter',
    filmLink:'film-page.html',
    imgSrc: 'img/mindhunter.jpg'
  },
  {
    name:'Midnight Special',
    filmLink:'film-page.html',
    imgSrc: 'img/midnight-special.jpg'
  },
];

export function Catalog(): ReactElement {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="#" className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        <div className="catalog__films-list">
          {FILMS.map((film) => (<SmallFilmCard key={film.name} name={film.name} filmLink={film.filmLink} imgSrc={film.imgSrc} />))}
        </div>
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
