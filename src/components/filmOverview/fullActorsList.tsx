import { Fragment, ReactElement } from 'react';

type FullActorsListProps = {
  actors: string[];
};

export function FullActorsList({ actors }: FullActorsListProps): ReactElement {
  return (
    <Fragment>
      {actors.map((actor) => (
        <Fragment key={actor}>
          {actor}, <br />
        </Fragment>
      ))}
    </Fragment>
  );
}
