import {ReactElement, useEffect, useRef} from 'react';
import {Film} from '../../types/film';

export type PlayerProps = {
  film: Film;
  isPlaying: boolean;
}

export function Player({film, isPlaying}: PlayerProps): ReactElement {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  useEffect(
    () => {
      if (playerRef !== null) {
        if (isPlaying) {
          playerRef.current?.play();
        } else {
          playerRef.current?.load();
        }
      }
    },
    [isPlaying]
  );
  return (
    <video ref={playerRef} width="280" height="175" src={film.videoSrc} poster={film.imgSrc} muted />
  );
}
