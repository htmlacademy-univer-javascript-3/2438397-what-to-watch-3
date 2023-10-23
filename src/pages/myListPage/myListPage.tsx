import {ReactElement} from 'react';
import {Footer} from '../../components/footer/footer';
import {Catalog} from '../../components/catalog/catalog';
import {Logo} from '../../components/logo/logo';
import {UserBlock} from '../../components/userBlock/userBlock';
import {Video} from '../../types/video';

export type MyFilmsPageProps = {
  filmsList: Video[];
};

export function MyListPage({filmsList}: MyFilmsPageProps): ReactElement {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmsList.length}</span></h1>
        <UserBlock />
      </header>

      <Catalog needRenderGenres={false} needRenderShowMoreButton={false} filmsList={filmsList} />
      <Footer/>
    </div>
  );
}
