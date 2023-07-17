import { FC, useState } from 'react';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Title from '../Title/Title';
import { strings } from '../../../../lists/hotelCommunityPlatform';
import Link from 'next/link';
import SocialList from '../../../../shared/Header/components/SocialList/SocialList';
import styles from './footer.module.scss';

const Footer: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const [isDisabled, setIsDisabled] = useState(false);
  const changeDisabled = () =>
    isDisabled ? setIsDisabled(false) : setIsDisabled(true);

  return (
    <footer className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={1}
        delay={1}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.lineTop} />
      </AnimationOnScroll>
      <div className={styles.wrapperTitle}>
        <Title
          title={strings.titleFooter}
          classesTitle="footerTitle"
          classesWrapper="wrapperFooter"
        />
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.lineRight} />
        </AnimationOnScroll>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.contact}>{strings.contactFooter}</p>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          delay={1}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Link href="mailto:info@bandapixels.com">
            <a
              className={!isDisabled ? styles.link : styles.linkDisabled}
              onClick={changeDisabled}
            >
              {strings.marketing}
            </a>
          </Link>
        </AnimationOnScroll>
        <div className={styles.socialWrapper}>
          <SocialList />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
