import {ReactElement} from 'react';

const AVATAR_IMG_SRC = 'img/avatar.jpg';

export function UserBlock(): ReactElement {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={AVATAR_IMG_SRC} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}
