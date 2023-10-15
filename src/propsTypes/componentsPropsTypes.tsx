import {ReactElement} from 'react';
import {AuthorizationStatus} from '../app/appTypes';

export type AuthorizationProps = {
  authorizationStatus: AuthorizationStatus;
  child: ReactElement;
}

export type FilmCardProps = {
  id: number;
  name: string;
  imgSrc: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export type FilmPromoProps = {
  name: string;
  genre: string;
  releaseDate: number;
  imgSrc: string;
  bgImgSrc: string;
}

export type CatalogProps = {
  needRenderGenres: boolean;
  needRenderShowMoreButton: boolean;
  filmsCardsList: Array<FilmCardProps>;
}

export type PlayerProps = {
  videoSrc: string;
  posterSrc: string;
}

export type AddReviewProps = {
  id: number;
  name: string;
  imgSrc: string;
  bgImgSrc: string;
}

export type StarProps = {
  value: number;
  onClick: () => void;
}
