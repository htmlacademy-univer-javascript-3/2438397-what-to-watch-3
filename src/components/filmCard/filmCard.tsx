import {ReactElement, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {AppRoute} from '../../app/appTypes';
import {Film} from '../../types/film';
import {Player} from '../player/player';

export type FilmCardProps = {
  film: Film;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const START_PLAYING_DELAY_MS = 1000;

export function FilmCard({film, onMouseEnter, onMouseLeave}: FilmCardProps) : ReactElement {
  const [needToPlay, setNeedToPlay] = useState<boolean>(false);
  const [isPlayingNow, setIsPlayingNow] = useState<boolean>(false);

  useEffect(() => {
    let stillHovered = true;
    if (needToPlay) {
      setTimeout(() => stillHovered && setIsPlayingNow(true), START_PLAYING_DELAY_MS);
    }
    return(() => {
      stillHovered = false;
    });
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
      <div className="small-film-card__image">
        <Player film={film} isPlaying={isPlayingNow} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(film.id)}>{film.name}</Link>
      </h3>
    </article>
  );
}