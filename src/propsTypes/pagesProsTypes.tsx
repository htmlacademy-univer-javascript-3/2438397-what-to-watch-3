import {AddReviewProps, FilmCardProps, FilmPromoProps, PlayerProps} from './componentsPropsTypes';

export type AppProps = {
  mainPageProps: MainPageProps;
  myFilmsPageProps: MyFilmsPageProps;
  playerPageProps: PlayerProps;
  addReviewPageProps: AddReviewProps;
}

export type MainPageProps = {
  filmPromo: FilmPromoProps;
  filmsCardList: Array<FilmCardProps>;
}

export type MyFilmsPageProps = {
  filmsCardList: Array<FilmCardProps>;
}
