import { FC } from 'react';
import { mainList } from '../../../../../lists/hotelCommunityPlatform';
import MainItem from './MainItem/MainItem';
import styles from './mainList.module.scss';

const MainList: FC = () => {
  return (
    <ul className={styles.container}>
      {mainList.map(({ subTitle, title, id, titleClass, delay }) => (
        <MainItem
          key={id}
          subTitle={subTitle}
          title={title}
          titleClass={titleClass}
          delay={delay}
        />
      ))}
    </ul>
  );
};

export default MainList;
