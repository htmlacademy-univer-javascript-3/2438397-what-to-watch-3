import { ReactElement } from 'react';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';
import { PlayButton } from '../buttons/play-button';
import { MyListButton } from '../buttons/my-list-button';
import { AddReviewButton } from '../buttons/add-review-button';
import { FilmInfo } from '../../types/film';
import { AuthorizationStatus } from '../../types/authorization-status';
import { useAuthorizationStatusSelector } from '../../store/user/selectors';

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
            <PlayButton filmId={film?.id || ''} />
            <MyListButton filmId={film?.id || ''} />
            {authorizationStatus === AuthorizationStatus.Auth && (
              <AddReviewButton filmId={film?.id || ''} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
