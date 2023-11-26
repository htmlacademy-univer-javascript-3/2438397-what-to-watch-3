import { ReactElement } from 'react';
import {useAppSelector} from "../../hooks";

export function Error(): ReactElement | null {
  const { error } = useAppSelector((state) => state);

  return error ? (
    <div className="error-info">{error}</div>
  ) : null;
}
