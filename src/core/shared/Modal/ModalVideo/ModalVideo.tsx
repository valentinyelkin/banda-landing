import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import styles from './modalVideo.module.scss';
import useOutsideClick from '../../../utils/useOutsideClick';
import Button from '../../coreUi/Button/Button';

interface ModalViewProps {
  clickHandler: () => void;
}

const ModalVideo: React.FunctionComponent<ModalViewProps> = ({
  clickHandler,
}) => {
  const refVideo =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const playerRef =
    useRef<ReactPlayer>() as React.MutableRefObject<ReactPlayer | null>;
  const [playing, setPlaying] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const videoWrapperClasses = classNames(styles.videoWrapper, {
    playedVideo: playing,
  });

  const handlePlayPause = (): void => {
    setPlaying(!playing);
  };

  const handleSeekChange = (event): void => {
    setPlayedTime(parseFloat(event.currentTarget.value));
  };

  const handleSeekMouseUp = (event): void => {
    const player = playerRef.current;
    player?.seekTo(parseFloat(event.currentTarget.value));
  };

  const handlePlayedTime = ({ played }): void => {
    setPlayedTime(parseFloat(played));
  };

  useEffect(() => {
    document.body.classList.add('removeScrolling');

    return (): void => {
      document.body.classList.remove('removeScrolling');
    };
  });

  useOutsideClick(refVideo, clickHandler);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrap}>
        <div className={videoWrapperClasses} ref={refVideo}>
          <ReactPlayer
            className={styles.video}
            autoPlay
            playing={playing}
            url="/videos/AppNavi_animate.mp4"
            width="100%"
            height="100%"
            ref={playerRef}
            onProgress={handlePlayedTime}
            onClick={handlePlayPause}
          />
          <Button classes="btnPlay" handlerClick={handlePlayPause} />
          <div className={styles.progressWrapper}>
            <div
              className={styles.progressValue}
              style={{ width: `${playedTime * 100}%` }}
            />
            <input
              className={styles.range}
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={playedTime}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />
          </div>
        </div>
        <Button classes="btnClose" />
      </div>
    </div>
  );
};

export default ModalVideo;
