import React, { FC, PropsWithChildren } from 'react';
import styles from './main-wrapper.module.scss';

const MainWrapper: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className={styles.mainWrapper}>{children}</div>;
};

export default MainWrapper;
