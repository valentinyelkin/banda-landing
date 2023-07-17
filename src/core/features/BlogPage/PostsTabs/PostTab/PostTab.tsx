import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './post-tab.module.scss';

export type PostTabProps = {
  id: string;
  title: string;
  postsCount: number;
  active?: boolean;
  clickHandler?: (category: string) => void;
};

export const PostTab: FC<PostTabProps> = ({
  title,
  id,
  postsCount = 0,
  active,
  clickHandler,
}) => {
  const [rightBorder, setRightBorder] = useState(false);
  const tabRef = useRef<HTMLLIElement>(null);
  const tabClasses = classNames(styles.tabWrapper, {
    [styles.active]: active,
    [styles.bottomRow]: tabRef?.current && tabRef?.current.offsetTop > 0,
    [styles.rightBorder]: rightBorder,
  });

  const onClick = () => {
    if (clickHandler) clickHandler(id);
  };

  useEffect(() => {
    setRightBorder(
      tabRef.current !== null &&
        tabRef.current?.nextElementSibling !== null &&
        tabRef.current.offsetTop <
          (tabRef.current.nextElementSibling as HTMLLIElement).offsetTop,
    );

    const handleResize = () => {
      setRightBorder(
        tabRef.current !== null &&
          tabRef.current?.nextElementSibling !== null &&
          tabRef.current.offsetTop <
            (tabRef.current.nextElementSibling as HTMLLIElement).offsetTop,
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [tabRef, tabRef?.current?.offsetTop, tabRef?.current?.nextElementSibling]);

  return (
    <li key={title} className={tabClasses} onClick={onClick} ref={tabRef}>
      <div className={styles.tabInnerWrapper}>
        <p className={styles.tabText}>{`${title} (${postsCount})`}</p>
      </div>
    </li>
  );
};
