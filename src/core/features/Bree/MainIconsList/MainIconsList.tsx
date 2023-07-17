import React from 'react';
import MainTitleIcons from './MainTitleIcons/MainTitleIcons';
import styles from './mainIconsList.module.scss';
import { iconsList } from '../../../lists/lists';

const MainIconsList: React.FC = () => (
  <div className={styles.containerList}>
    {iconsList.map(({ icon, id, title, alt }) => (
      <MainTitleIcons key={id} icon={icon} titleIcon={title} alt={alt} />
    ))}
  </div>
);

export default MainIconsList;
