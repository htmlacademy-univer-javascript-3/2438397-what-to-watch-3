import {ReactElement} from 'react';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/userBlock/userBlock';
import {AddReviewForm, AddReviewProps} from '../../components/addReviewForm/addReviewForm';

export function AddReviewPage({name, imgSrc, bgImgSrc}: AddReviewProps): ReactElement {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={bgImgSrc} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={imgSrc} alt={name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}
