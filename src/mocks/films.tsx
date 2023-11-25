import { FilmPromoProps } from '../components/filmPromo/filmPromo';
import {FilmInfo, ShortFilmInfo} from '../types/film';
import { Review } from '../types/review';
import { FilmOverviewPageProps } from '../pages/filmOverviewPage/filmOverviewPage';

export const MY_FILMS: ShortFilmInfo[] = [
  {
    id: "1",
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Comedies',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "2",
    name: 'Bohemian Rhapsody',
    genre: 'Comedies',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "3",
    name: 'Macbeth',
    genre: 'Comedies',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "4",
    name: 'Aviator',
    genre: 'Comedies',
    previewImage: 'img/aviator.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "5",
    name: 'We need to talk about Kevin',
    genre: 'Comedies',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "6",
    name: 'What We Do in the Shadows',
    genre: 'Comedies',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "7",
    name: 'Revenant',
    genre: 'Comedies',
    previewImage: 'img/revenant.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "8",
    name: 'Johnny English',
    genre: 'Comedies',
    previewImage: 'img/johnny-english.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "9",
    name: 'Shutter Island',
    genre: 'Comedies',
    previewImage: 'img/shutter-island.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
];

export const SIMILAR_FILMS: ShortFilmInfo[] = [
  {
    id: "1",
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: 'Comedies',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "2",
    name: 'Bohemian Rhapsody',
    genre: 'Comedies',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "3",
    name: 'Macbeth',
    genre: 'Comedies',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: "4",
    name: 'Aviator',
    genre: 'Comedies',
    previewImage: 'img/aviator.jpg',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    rating: 8.0,
    author: 'Amanda Greever',
    date: 'November 18, 2015',
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
  },
  {
    id: 2,
    rating: 8.0,
    author: 'Bill Goodykoontz',
    date: 'November 18, 2015',
    text: 'nderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
  },
  {
    id: 3,
    rating: 7.2,
    author: 'Matthew Lickona',
    date: 'December 20, 2016',
    text: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
  },
  {
    id: 4,
    rating: 8.0,
    author: 'Amanda Greever',
    date: 'November 18, 2015',
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
  },
  {
    id: 5,
    rating: 8.0,
    author: 'Amanda Greever',
    date: 'November 18, 2015',
    text: 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
  },
];

export const FILM: FilmInfo = {
  id: "100500",
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
  posterImgSrc: 'img/the-grand-budapest-hotel-poster.jpg',
  bgImgSrc: 'img/bg-the-grand-budapest-hotel.jpg',
  rating: 8.9,
  director: 'Wes Anderson',
  reviewsNumber: 240,
  actors: [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
    'Tony Revoloru',
    'Tilda Swinton',
  ],
  description:
    'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. \
    (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n \
    Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the \
    many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless \
    painting and the chief suspect in her murder.',
  durationMinutes: 94,
  filmVideo: {
    posterSrc: 'img/bg-the-grand-budapest-hotel.jpg',
    videoSrc:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
};

export const FILM_PROMO: FilmPromoProps = {
  id: FILM.id,
  name: FILM.name,
  genre: FILM.genre,
  releaseDate: FILM.releaseDate,
  imgSrc: FILM.posterImgSrc,
  bgImgSrc: FILM.bgImgSrc,
};

export const FILM_OVERVIEW: FilmOverviewPageProps = {
  film: FILM,
  reviews: REVIEWS,
  similarFilmsCards: SIMILAR_FILMS,
};
