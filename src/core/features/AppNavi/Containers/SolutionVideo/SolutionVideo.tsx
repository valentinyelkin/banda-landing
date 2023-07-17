import React from 'react';
import styles from './solutionVideo.module.scss';

const SolutionVideo: React.FunctionComponent = () => {
  return (
    <section className={styles.solutionVideo}>
      <div className={styles.solutionVideoWrapper}>
        <video controls>
          <source src="/videos/AppNavi_animate.mp4" type="video/mp4" />
        </video>
      </div>
      <img
        src="/images/projects/AppNavi/o.svg"
        alt="Decor O"
        className={styles.solutionDecorCurcle}
      />
    </section>
  );
};

export default SolutionVideo;
