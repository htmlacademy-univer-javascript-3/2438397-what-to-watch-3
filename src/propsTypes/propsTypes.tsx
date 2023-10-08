export type FilmCardProps = {
  name: string;
  filmLink: string;
  imgSrc: string;
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
