import { ReactElement } from 'react';

export function Logo(): ReactElement {
  return (
    <div className="logo">
      <a href="/" className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}
