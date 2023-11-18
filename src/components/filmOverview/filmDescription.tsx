import { Fragment, ReactElement } from 'react';

export type FilmDescriptionProps = {
  description: string;
};

export function FilmDescription({
  description,
}: FilmDescriptionProps): ReactElement {
  return (
    <Fragment>
      {description.split('\n').map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Fragment>
  );
}
