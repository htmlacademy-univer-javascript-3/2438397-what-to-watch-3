import { ReactElement } from 'react';
import { Logo } from '../logo/logo';
import { UserBlock } from '../userBlock/userBlock';
import { PlayButton } from '../buttons/playButton';
import { MyListButton } from '../buttons/myListButton';
import { AddReviewButton } from '../buttons/addReviewButton';
import { FilmInfo } from '../../types/film';
import { useAuthorizationStatusSelector } from '../../store/selectors';
import { AuthorizationStatus } from '../../types/authorizationStatus';

export type FilmOverviewHeaderProps = {
  film: FilmInfo | null;
};

export function FilmOverviewHeader({
  film,
}: FilmOverviewHeaderProps): ReactElement {
  const authorizationStatus = useAuthorizationStatusSelector();

  return (
    <div className="film-card__hero">
      <div className="film-card__bg">
        <img src={film?.backgroundImage} alt={film?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__desc">
          <h2 className="film-card__title">{film?.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film?.genre}</span>
            <span className="film-card__year">{film?.released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton filmId={film?.id || ':id'} />
            <MyListButton />
            {authorizationStatus === AuthorizationStatus.Auth && (
              <AddReviewButton filmId={film?.id || ':id'} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
