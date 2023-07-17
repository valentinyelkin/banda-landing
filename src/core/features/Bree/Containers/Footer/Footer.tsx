import React, { useState } from 'react';
import Link from 'next/link';
import SocialList from '../../../../shared/Header/components/SocialList/SocialList';
import classNames from 'classnames';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  const [disabled, setDisabled] = useState(false);
  const changeDisabled = () => setDisabled(!disabled);
  const nameLinkClasses = classNames(styles.nameLink, {
    [styles.nameLinkDisabled]: disabled,
  });
  return (
    <section className={styles.container}>
      <div className={styles.wrapperText}>
        {!isMobile ? (
          <p className={styles.title}>
            Let&apos;s make your service
            <br /> the best choice for the users
          </p>
        ) : (
          <p className={styles.title}>
            Let&apos;s make your service the best choice for the users
          </p>
        )}
        <span className={styles.contact}>Contact us</span>
      </div>
      <div className={styles.containerLinks}>
        <div className={styles.wrapperLink}>
          <Link href="mailto:marketing@bandapixels.com">
            <a onClick={changeDisabled} className={nameLinkClasses}>
              marketing@bandapixels.com
            </a>
          </Link>
        </div>
        <div className={styles.wrapperSocialList}>
          <SocialList />
        </div>
      </div>
    </section>
  );
};

export default Footer;
