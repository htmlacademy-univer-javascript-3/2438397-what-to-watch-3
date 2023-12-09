import { ReactElement } from 'react';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/userBlock/userBlock';
import { AddReviewForm } from '../../components/addReviewForm/addReviewForm';
import { useCurrentFilm } from '../../hooks';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/spinner/spinner';
import { NotFoundPage } from '../notFoundPage/notFoundPage';

export function AddReviewPage(): ReactElement {
  const id = (useParams() as { id: string }).id;

  const { data: film, isLoading, isNotFound } = useCurrentFilm(id);

  return (
    <Spinner isLoading={isLoading}>
      {isNotFound ? (
        <NotFoundPage />
      ) : (
        <section className="film-card film-card--full">
          <div className="film-card__header">
            <div className="film-card__bg">
              <img src={film?.backgroundImage} alt={film?.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <Logo />

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="film-page.html" className="breadcrumbs__link">
                      {film?.name}
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <UserBlock />
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img
                src={film?.posterImage}
                alt={film?.name}
                width="218"
                height="327"
              />
            </div>
          </div>

          <AddReviewForm id={id} />
        </section>
      )}
    </Spinner>
  );
}
