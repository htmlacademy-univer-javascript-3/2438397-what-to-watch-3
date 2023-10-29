import { ReactElement } from 'react';
import { Logo } from '../logo/logo';
import { UserBlock } from '../userBlock/userBlock';
import { PlayButton } from '../buttons/playButton';
import { Video } from '../../types/video';
import { MyListButton } from '../buttons/myListButton';

export type FilmPromoProps = {
  name: string;
  genre: string;
  releaseDate: number;
  imgSrc: string;
  bgImgSrc: string;
  video: Video;
};

export function FilmPromo({
  video,
  name,
  genre,
  releaseDate,
  imgSrc,
  bgImgSrc,
}: FilmPromoProps): ReactElement {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={bgImgSrc} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={imgSrc} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{releaseDate}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton videoId={video.id} />
              <MyListButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
