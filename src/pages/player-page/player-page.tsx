import { ReactElement, useEffect, useRef, useState, MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCurrentFilm } from '../../hooks';
import { AppRoute } from '../../app/app-types';
import { convertTimeToPlayerFormat } from '../../helpers/time-converter';

export function PlayerPage(): ReactElement {
  const id = (useParams() as { id: string }).id;
  const { data: film } = useCurrentFilm(id);

  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current?.play();
      } else {
        playerRef.current?.pause();
      }
    }
  }, [isPlaying]);

  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [remainTime, setRemainTime] = useState<number>(0);

  const progressBarRef = useRef<HTMLProgressElement>(null);

  const handleProgressBarClick = (event: MouseEvent<HTMLProgressElement>) => {
    if (playerRef.current && progressBarRef.current) {
      const progressBar = progressBarRef.current;
      const rect = progressBar.getBoundingClientRect();
      const offset = event.clientX - rect.left;
      const progressBarWidth = progressBar.offsetWidth;
      const progress = (offset / progressBarWidth) * 100;
      setVideoProgress(progress);

      if (playerRef.current) {
        const duration = playerRef.current.duration;
        const currentTime = (progress * duration) / 100;
        playerRef.current.currentTime = currentTime;
        setRemainTime(Math.floor(duration - currentTime));
      }
    }
  };

  return (
    <div className="player">
      <video
        ref={playerRef}
        src={film?.videoLink}
        className="player__video"
        poster={film?.backgroundImage}
        onTimeUpdate={(event) => {
          event.preventDefault();
          if (playerRef.current) {
            const currentTime = playerRef.current.currentTime;
            const duration = playerRef.current.duration;

            setVideoProgress((currentTime / duration) * 100);
            setRemainTime(Math.round(duration - currentTime));
          }
        }}
      />

      <Link type="button" className="player__exit" to={AppRoute.Root}>
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={videoProgress}
              max="100"
              ref={progressBarRef}
              onClick={handleProgressBarClick}
            />
            <div
              className="player__toggler"
              style={{ left: `${videoProgress}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {convertTimeToPlayerFormat(remainTime)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={(event) => {
              event.preventDefault();
              setIsPlaying(!isPlaying);
            }}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={(event) => {
              event.preventDefault();
              if (playerRef.current) {
                playerRef.current?.requestFullscreen().then();
              }
            }}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
