import { ReactElement } from 'react';
import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';

export function NotFoundPage(): ReactElement {
  return (
    <div className="user-page">
      <header className="page-header film-card__head">
        <Logo />
      </header>
      <div className="user-page__content">
        <h1 className="page-title user-page__title">Page not found!</h1>
      </div>
      <Footer />
    </div>
  );
}
