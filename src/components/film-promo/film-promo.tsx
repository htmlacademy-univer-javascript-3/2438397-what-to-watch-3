import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';
import { PlayButton } from '../play-button/play-button';
import { MyListButton } from '../my-list-button/my-list-button';
import { usePromoFilm } from '../../hooks';
import { Spinner } from '../spinner/spinner';
import { AppRoute } from '../../app/app-types';
import { AuthorizationStatus } from '../../types/authorization-status';
import { useAuthorizationStatusSelector } from '../../store/user/selectors';

export function FilmPromo(): ReactElement {
  const authStatus = useAuthorizationStatusSelector();
  const { data: film, isLoading } = usePromoFilm();

  return (
    <Spinner isLoading={isLoading}>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Link className="film-card__poster" to={AppRoute.Film(film?.id)}>
              <img
                src={film?.posterImage}
                alt={film?.name}
                width="218"
                height="327"
              />
            </Link>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={film?.id || ''} />
                {authStatus === AuthorizationStatus.Auth && (
                  <MyListButton filmId={film?.id || ''} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Spinner>
  );
}
