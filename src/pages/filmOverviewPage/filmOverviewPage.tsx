import { Fragment, ReactElement, useState } from 'react';
import { Footer } from '../../components/footer/footer';
import { FilmInfo, ShortFilmInfo } from '../../types/film';
import { Catalog } from '../../components/catalog/catalog';
import { FilmOverviewHeader } from '../../components/filmOverview/filmOverviewHeader';
import { FilmOverview } from '../../components/filmOverview/filmOverview';
import { FilmOverviewDetails } from '../../components/filmOverview/filmOverviewDetails';
import { Review } from '../../types/review';
import { FilmOverviewReviews } from '../../components/filmOverview/filmOverviewReviews';

export enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export type FilmOverviewPageProps = {
  film: FilmInfo;
  reviews: Review[];
  similarFilmsCards: ShortFilmInfo[];
};

export function FilmOverviewPage({
  film,
  reviews,
  similarFilmsCards,
}: FilmOverviewPageProps): ReactElement {
  const [activeTab, setActiveTab] = useState<TabsType>(TabsType.Overview);
  return (
    <Fragment>
      <section className="film-card film-card--full">
        <FilmOverviewHeader film={film} />

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImgSrc}
                alt={film.name}
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

              {activeTab === TabsType.Overview && <FilmOverview film={film} />}
              {activeTab === TabsType.Details && (
                <FilmOverviewDetails film={film} />
              )}
              {activeTab === TabsType.Reviews && (
                <FilmOverviewReviews reviews={reviews} />
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <Catalog
            needRenderShowMoreButton={false}
            filmsList={similarFilmsCards}
          />
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}
