export type FilmInfo = {
  id: string;
  name: string;
  genre: string;
  released: number;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoreCount: number;
  reviewsNumber: number;
  director: string;
  starring: string[];
  runTime: number;
  isFavourite: boolean;
};

export type FilmPromoInfo = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type ShortFilmInfo = {
  id: string;
  name: string;
  genre: string;
  previewVideoLink: string;
  previewImage: string;
};
