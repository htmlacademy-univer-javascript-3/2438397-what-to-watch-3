import { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../app/app-types';
import { PreviewPlayer } from '../preview-player/preview-player';
import { ShortFilmInfo } from '../../types/film';

export type FilmCardProps = {
  film: ShortFilmInfo;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const START_PLAYING_DELAY_MS = 1000;

export function FilmCard({
  film,
  onMouseEnter,
  onMouseLeave,
}: FilmCardProps): ReactElement {
  const [needToPlay, setNeedToPlay] = useState<boolean>(false);
  const [isPlayingNow, setIsPlayingNow] = useState<boolean>(false);

  useEffect(() => {
    let stillHovered = true;
    if (needToPlay) {
      setTimeout(
        () => stillHovered && setIsPlayingNow(true),
        START_PLAYING_DELAY_MS,
      );
    }
    return () => {
      stillHovered = false;
    };
  }, [needToPlay]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        onMouseEnter();
        setNeedToPlay(true);
      }}
      onMouseLeave={() => {
        onMouseLeave();
        setIsPlayingNow(false);
        setNeedToPlay(false);
      }}
    >
      <Link className="small-film-card__image" to={AppRoute.Film(film.id)}>
        <PreviewPlayer
          videoSrc={film.previewVideoLink}
          posterSrc={film.previewImage}
          isPlaying={isPlayingNow}
        />
      </Link>
      <Link className="small-film-card__link" to={AppRoute.Film(film.id)}>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
}
