import { ReactElement, useEffect } from 'react';
import { Footer } from '../../components/footer/footer';
import { Catalog } from '../../components/catalog/catalog';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/user-block/user-block';
import { useFavouriteFilms } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';

const MAX_MY_FILMS_CARDS_COUNT = 8;

export function MyListPage(): ReactElement {
  const { films, isLoading, fetchFavouriteFilmsCallback } = useFavouriteFilms();
  useEffect(() => {
    fetchFavouriteFilmsCallback();
  }, [fetchFavouriteFilmsCallback]);

  return (
    <Spinner isLoading={isLoading}>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">
            My list{' '}
            <span className="user-page__film-count">{films.length}</span>
          </h1>
          <UserBlock />
        </header>

        <Catalog filmsList={films} maxFilmsCount={MAX_MY_FILMS_CARDS_COUNT} />
        <Footer />
      </div>
    </Spinner>
  );
}
