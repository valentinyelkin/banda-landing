import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

import styles from './project.module.scss';
import projectsStyles from '../../projects.module.scss';
import BigArrow from '../../../../../../shared/Icons/BigArrow';
import useIsMobile from '../../../../../../utils/useIsMobile';
import Button from '../../../../../../shared/coreUi/Button/Button';
import ArrowForSlider from '../../../../../../shared/Icons/ArrowForSlider';
import stylesBtn from '../../../../../../shared/coreUi/Button/button.module.scss';

interface ProjectProps {
  title: string;
  description?: string;
  footerTitle: string;
  footerDescription?: string;
  video?: string;
  url: string;
  orientation: string;
  position: string;
  image?: string;
  handlerPrevSlide?: () => void;
  handlerNextSlide?: () => void;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  title,
  description,
  footerTitle,
  footerDescription,
  video,
  url,
  orientation,
  position,
  image,
  handlerPrevSlide,
  handlerNextSlide,
}) => {
  const [visiblePart, setVisiblePart] = useState(description);
  const [hiddenPart, setHiddenPart] = useState('');
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const isMobile = useIsMobile();

  const splitTextForMobile = (): void => {
    if (window.outerWidth <= 668) {
      const textArr =
        visiblePart?.split('').filter((word) => word.length > 0) || [];

      if (textArr.length > 120) {
        setVisiblePart(textArr.slice(0, 120).join(''));
        setHiddenPart(textArr.slice(120).join(''));
      }
    } else {
      setVisible(true);
    }
  };

  const handlerShowMore = (): void => {
    setVisible(!visible);
  };

  useEffect(() => {
    splitTextForMobile();
  }, []);

  return (
    <div className={styles.projectItem}>
      <div
        className={classNames(styles.projectContent, {
          [styles.mediaLeft]: position === 'left',
        })}
      >
        <div className={styles.projectInfo}>
          <h2>Successful projects</h2>
          <h3
            className={styles.projectTitle}
            onClick={(): void => {
              router.push(url);
            }}
          >
            {title}
          </h3>
          <div
            className={styles.projectProblem}
            onClick={(): void => {
              router.push(url);
            }}
            dangerouslySetInnerHTML={{
              __html: `${visiblePart}${visible ? hiddenPart : '...'}`,
            }}
          />
          {!visible && (
            <span className={styles.readMore} onClick={handlerShowMore}>
              read more
            </span>
          )}
        </div>
        {video && !isMobile ? (
          <Link href={url}>
            <a>
              <video
                muted
                autoPlay
                loop
                preload="auto"
                playsInline
                className={classNames(styles.projectMedia, {
                  [styles.portrait]: orientation === 'portrait',
                  [styles.noVideo]: !video,
                })}
              >
                <source src={video} type="video/mp4" />
              </video>
            </a>
          </Link>
        ) : null}
        {!video || (image && isMobile) ? (
          <Link href={url}>
            <a>
              <img src={image} alt={title} className={styles.projectImage} />
            </a>
          </Link>
        ) : null}
      </div>
      <div className={projectsStyles.projectsFooter}>
        <div className={styles.projectsFooterLeftPart}>
          <Link href={url}>
            <a href={url} className={styles.projectBtn}>
              <span>See the creation process</span>
              <BigArrow />
            </a>
          </Link>
          <div
            className={styles.projectDescription}
            onClick={(): void => {
              router.push(url);
            }}
          >
            <h3>{footerTitle}</h3>
            <div>{footerDescription}</div>
          </div>
        </div>
        <div className={stylesBtn.sliderBtnWrapper}>
          <div className={projectsStyles.sliderBtnWrapper}>
            <Button
              type="button"
              classes="sliderPrev"
              handlerClick={handlerPrevSlide}
            >
              <ArrowForSlider />
            </Button>
            <Button
              type="button"
              classes="sliderNext"
              handlerClick={handlerNextSlide}
            >
              <ArrowForSlider />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
