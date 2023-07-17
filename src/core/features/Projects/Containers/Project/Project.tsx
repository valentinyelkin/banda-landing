import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import useGrid from '../../../../utils/useGrid';
import useRedrawGrid from '../../../../utils/useRedrawGrid';
import styles from './project.module.scss';
import BigArrow from '../../../../shared/Icons/BigArrow';
import Button from '../../../../shared/coreUi/Button/Button';
import {
  changeSection,
  updateCanScroll,
} from '../../../../shared/FullPageScroll/fullPageScroll.actions';
import { AppState } from '../../../../store/store';
import {
  getSection,
  getCanScroll,
} from '../../../../shared/FullPageScroll/fullPageScroll.selectors';
import useIsMobile from '../../../../utils/useIsMobile';
import Arrow from '../../../../shared/Icons/Arrow/Arrow';

interface ProjectProps {
  title: string;
  description?: string;
  footerTitle?: string;
  footerDescription?: string;
  video?: string;
  url: string;
  orientation: string;
  position: string;
  isFirst: boolean;
  isLast: boolean;
  projectIndex: number;
  image?: string;
  data: boolean;
  mainTitle?: string;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  data,
  title,
  description,
  footerTitle,
  footerDescription,
  video,
  url,
  orientation,
  position,
  isFirst,
  isLast,
  projectIndex,
  image,
  mainTitle,
}) => {
  const [visiblePart, setVisiblePart] = useState(description);
  const [hiddenPart, setHiddenPart] = useState('');
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const refGridWrapper =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLElement | null>;
  const dispatch = useDispatch();
  const activeSection = useSelector((state: AppState) => getSection(state));
  const canScroll = useSelector((state: AppState) => getCanScroll(state));
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

  const scrollToSection = (scrollTo: number, section = activeSection): void => {
    const needToScroll = (scrollTo - section) * -100;
    const wrapper = document.getElementById('fullpageWrapper') as HTMLElement;
    const scrollHeight = +(
      wrapper.getAttribute('style')?.replace(/[^-\d]/g, '') || 0
    );

    if (needToScroll !== 0) {
      wrapper.style.transform = `translateY(${scrollHeight + needToScroll}vh)`;
      dispatch(changeSection(scrollTo));
    }
  };

  const changeProject = (direction): void => {
    if (!canScroll) return;
    dispatch(updateCanScroll(false));

    let scrollTo: number = projectIndex;

    if (direction === 'up') {
      scrollTo--;
    }

    if (direction === 'down') {
      scrollTo++;
    }

    dispatch(changeSection(scrollTo));
    scrollToSection(scrollTo);

    setTimeout(() => {
      dispatch(updateCanScroll(true));
    }, 1000);
  };

  useEffect(() => {
    splitTextForMobile();
  }, []);

  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.projectPageItem}
      ref={refGridWrapper}
      data-header={data ? 'black' : 'blog-header'}
    >
      <div
        className={classNames(styles.projectPageContent, {
          [styles.mediaLeft]: position === 'left',
        })}
      >
        <div className={styles.projectPageInfo}>
          {isFirst && <h1 className={styles.mainTitle}>{mainTitle}</h1>}
          <Link href={`${url}`}>
            <a className={styles.projectTitleLink}>
              <h2 className={styles.projectPageTitle}>{title}</h2>
            </a>
          </Link>
          <div
            className={styles.projectPageProblem}
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
        {video && !isMobile && (
          <Link href={`${url}`}>
            <a>
              <video
                muted
                autoPlay
                loop
                preload="auto"
                playsInline
                className={classNames(styles.projectPageMedia, {
                  [styles.portrait]: orientation === 'portrait',
                  [styles.noVideo]: !video.length,
                })}
              >
                <source src={video} type="video/mp4" />
              </video>
            </a>
          </Link>
        )}
        {!video || (image && isMobile) ? (
          <Link href={`${url}`}>
            <a>
              <img src={image} alt={title} className={styles.projectImage} />
            </a>
          </Link>
        ) : null}
      </div>
      <div className={styles.projectPageFooter}>
        <div className={styles.projectPageFooterLeftPart}>
          <Link href={url}>
            <a href={url} className={styles.projectPageBtn}>
              <span>See the creation process</span>
              <BigArrow />
            </a>
          </Link>
          <div
            className={styles.projectPageDescription}
            onClick={(): void => {
              router.push(url);
            }}
          >
            <h2>{footerTitle}</h2>
            <div>{footerDescription}</div>
          </div>
        </div>
        <div className={styles.projectPageFooterRightPart}>
          {!isFirst && (
            <div className={styles.projectPageUpBtn}>
              <Button
                type="button"
                handlerClick={(): void => {
                  changeProject('up');
                }}
              >
                <Arrow />
              </Button>
            </div>
          )}
          <div className={styles.projectPageDownBtn}>
            <Button
              type="button"
              handlerClick={(): void => {
                changeProject('down');
              }}
            >
              <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
