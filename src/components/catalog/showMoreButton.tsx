import { ReactElement } from 'react';

export type ShowMoreButtonProps = {
  onClick: () => void;
};

export function ShowMoreButton({ onClick }: ShowMoreButtonProps): ReactElement {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>
        Show more
      </button>
    </div>
  );
}
