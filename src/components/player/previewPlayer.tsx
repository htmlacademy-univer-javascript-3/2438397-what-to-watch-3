import { ReactElement, useEffect, useRef } from 'react';

export type PlayerProps = {
  videoSrc: string;
  posterSrc: string;
  isPlaying: boolean;
};

export function PreviewPlayer({ videoSrc, posterSrc, isPlaying }: PlayerProps): ReactElement {
  const playerRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current?.play();
      } else {
        playerRef.current?.load();
      }
    }
  }, [isPlaying]);
  return (
    <video
      ref={playerRef}
      width="280"
      height="175"
      src={videoSrc}
      poster={posterSrc}
      muted
    />
  );
}
