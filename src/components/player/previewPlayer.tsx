import { ReactElement, useEffect, useRef } from 'react';
import { Video } from '../../types/video';

export type PlayerProps = {
  video: Video;
  isPlaying: boolean;
};

export function PreviewPlayer({ video, isPlaying }: PlayerProps): ReactElement {
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
      src={video.videoSrc}
      poster={video.imgSrc}
      muted
    />
  );
}
