import React, { FC } from 'react';
import styles from './footer.module.scss';
import FooterButton from './FooterButton/FooterButton';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import FooterSocials from './FooterSocials/FooterSocials';
import { socialsList } from '../../../../lists/listsSestra';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';

const Footer: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={3}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <h2 className={styles.footerTitle}>
            Let&apos;s make your service the&nbsp;best choice for the users
          </h2>
          <p className={styles.footerText}>Contact us</p>
        </AnimationOnScroll>
        <FooterButton title="marketing@bandapixels.com" />
        <FooterSocials socialsList={socialsList} />
      </div>
    </div>
  );
};

export default Footer;
