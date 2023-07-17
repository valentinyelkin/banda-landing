import React, { FC } from 'react';
import styles from './Contacts.module.scss';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import SocialList from '../../../shared/Header/components/SocialList/SocialList';
import Link from 'next/link';

const Contacts: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={globalStyles.container}>
        <div className={styles.inner}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInDownBig}
            duration={1}
          >
            <div className={globalStyles.title}>
              Let’s make your service the best choice for the users
            </div>
          </AnimationOnScroll>
          <div className={styles.suptitle}>Contact us</div>
          <Link href="mailto:marketing@bandapixels.com">
            <div className={styles.email}>marketing@bandapixels.com</div>
          </Link>
          <div className={styles.socials}>
            <SocialList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
