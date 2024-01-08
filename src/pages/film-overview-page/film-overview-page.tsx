import { Fragment, ReactElement, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Footer } from '../../components/footer/footer';
import { Catalog } from '../../components/catalog/catalog';
import { FilmOverviewHeader } from '../../components/film-overview/film-overview-header';
import { FilmOverview } from '../../components/film-overview/film-overview';
import { FilmOverviewDetails } from '../../components/film-overview/film-overview-details';
import { FilmOverviewReviews } from '../../components/film-overview/film-overview-reviews';
import { useComments, useCurrentFilm, useSimilarFilms } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';
import { NotFoundPage } from '../not-found-page/not-found-page';

export enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export function FilmOverviewPage(): ReactElement {
  const id = (useParams() as { id: string }).id;

  const [activeTab, setActiveTab] = useState<TabsType>(TabsType.Overview);

  const { data: film, isLoading, isNotFound } = useCurrentFilm(id);
  const { films, isLoading: isSimilarFilmsLoading } = useSimilarFilms(id);
  const { comments, isLoading: isCommentsLoading } = useComments(id);

  return (
    <Spinner isLoading={isLoading}>
      {isNotFound ? (
        <NotFoundPage />
      ) : (
        <Fragment>
          <section className="film-card film-card--full">
            <FilmOverviewHeader film={film} />

            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img
                    src={film?.posterImage}
                    alt={film?.name}
                    width="218"
                    height="327"
                  />
                </div>

                <div className="film-card__desc">
                  <nav className="film-nav film-card__nav">
                    <ul className="film-nav__list">
                      <li
                        className={`film-nav__item ${
                          activeTab === TabsType.Overview
                            ? 'film-nav__item--active'
                            : ''
                        }`}
                      >
                        <a
                          href="#overview"
                          className="film-nav__link"
                          onClick={(event) => {
                            event.preventDefault();
                            setActiveTab(TabsType.Overview);
                          }}
                        >
                          {TabsType.Overview}
                        </a>
                      </li>
                      <li
                        className={`film-nav__item ${
                          activeTab === TabsType.Details
                            ? 'film-nav__item--active'
                            : ''
                        }`}
                      >
                        <a
                          href="#details"
                          className="film-nav__link"
                          onClick={(event) => {
                            event.preventDefault();
                            setActiveTab(TabsType.Details);
                          }}
                        >
                          {TabsType.Details}
                        </a>
                      </li>
                      <li
                        className={`film-nav__item ${
                          activeTab === TabsType.Reviews
                            ? 'film-nav__item--active'
                            : ''
                        }`}
                      >
                        <a
                          href="#reviews"
                          className="film-nav__link"
                          onClick={(event) => {
                            event.preventDefault();
                            setActiveTab(TabsType.Reviews);
                          }}
                        >
                          {TabsType.Reviews}
                        </a>
                      </li>
                    </ul>
                  </nav>

                  {activeTab === TabsType.Overview && (
                    <FilmOverview film={film} />
                  )}
                  {activeTab === TabsType.Details && (
                    <FilmOverviewDetails film={film} />
                  )}
                  {activeTab === TabsType.Reviews && (
                    <Spinner isLoading={isCommentsLoading}>
                      <FilmOverviewReviews reviews={comments} />
                    </Spinner>
                  )}
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <Spinner isLoading={isSimilarFilmsLoading}>
                <Catalog filmsList={films} maxFilmsCount={4} />
              </Spinner>
            </section>
            <Footer />
          </div>
        </Fragment>
      )}
    </Spinner>
  );
}
