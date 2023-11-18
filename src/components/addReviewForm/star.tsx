import { Fragment, ReactElement } from 'react';

export type StarProps = {
  value: number;
  onClick: () => void;
};

export function Star({ value, onClick }: StarProps): ReactElement {
  return (
    <Fragment>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        value={value}
        onClick={onClick}
      />
      <label className="rating__label" htmlFor={`star-${value}`}>
        Rating {value}
      </label>
    </Fragment>
  );
}
