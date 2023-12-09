import { ReactElement } from 'react';
import { Footer } from '../../components/footer/footer';
import { Catalog } from '../../components/catalog/catalog';
import { Logo } from '../../components/logo/logo';
import { UserBlock } from '../../components/userBlock/userBlock';
import { useFavouriteFilms } from '../../hooks';
import { Spinner } from '../../components/spinner/spinner';

export function MyListPage(): ReactElement {
  const { data: films, isLoading } = useFavouriteFilms();

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

        <Catalog filmsList={films} />
        <Footer />
      </div>
    </Spinner>
  );
}
