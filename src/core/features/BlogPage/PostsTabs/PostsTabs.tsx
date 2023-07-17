import React, { FC, MutableRefObject, PropsWithChildren } from 'react';
import styles from './posts-tabs.module.scss';

type PostsTabsProps = { tabsRef: MutableRefObject<HTMLUListElement | null> };

export const PostsTabs: FC<PropsWithChildren<PostsTabsProps>> = ({
  children,
  tabsRef,
}) => {
  return (
    <ul className={styles.tabsWrapper} ref={tabsRef}>
      {children}
    </ul>
  );
};
