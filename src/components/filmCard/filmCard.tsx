import {ReactElement} from 'react';
import { Link } from 'react-router-dom';

import {FilmCardProps} from '../../propsTypes/componentsPropsTypes.tsx';
import {AppRoute} from '../../app/appTypes';

export function FilmCard({id, name, imgSrc, onMouseEnter, onMouseLeave}: FilmCardProps) : ReactElement {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        <img src={imgSrc} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film(id)}>{name}</Link>
      </h3>
    </article>
  );
}
