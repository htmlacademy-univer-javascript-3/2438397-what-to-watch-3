import { Video } from './video';

export type Film = {
  id: number;
  name: string;
  genre: string;
  releaseDate: number;
  posterImgSrc: string;
  bgImgSrc: string;
  description: string;
  rating: number;
  reviewsNumber: number;
  director: string;
  actors: string[];
  durationMinutes: number;
  filmVideo: Video;
};
