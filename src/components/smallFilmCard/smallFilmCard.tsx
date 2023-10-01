import {ReactElement} from 'react';
import {SmallFilmCardProps} from '../../propsTypes/propsTypes.tsx';

export function SmallFilmCard({name, filmLink, imgSrc}: SmallFilmCardProps) : ReactElement {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={filmLink}>{name}</a>
      </h3>
    </article>
  );
}
