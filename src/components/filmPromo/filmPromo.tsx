import { ReactElement } from 'react';
import { Logo } from '../logo/logo';
import { UserBlock } from '../userBlock/userBlock';
import { PlayButton } from '../buttons/playButton';
import { MyListButton } from '../buttons/myListButton';
import { usePromoFilm } from '../../hooks';
import { Spinner } from '../spinner/spinner';

export function FilmPromo(): ReactElement {
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
            <div className="film-card__poster">
              <img
                src={film?.posterImage}
                alt={film?.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={film?.id} />
                <MyListButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Spinner>
  );
}
