import React, { useRef } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import useGrid from '../../utils/useGrid';
import SocialList from '../Header/components/SocialList/SocialList';
import { constantsRoutes } from '../routes';
import Image from 'next/image';

import useRedrawGrid from '../../utils/useRedrawGrid';
import styles from './contactsBlock.module.scss';
import useIsLaptop from '../../utils/useIsLaptop';
import useIsMobile from '../../utils/useIsMobile';
import useIsTablet from '../../utils/useIsTablet';
import { LineDesktop } from './LineDesktop/LineDesktop';
import { LineTablet } from './LineTablet/LineTablet';

export enum Position {
  LEFT = 'left',
  RIGHT = 'right',
}

interface ContactsBlockProps {
  classes?: string;
  classesMail?: string;
  classesContent?: string;
  classesTitle?: string;
  classesText?: string;
  openedMenu?: boolean;
  text?: string;
  position?: Position;
  title?: string;
}

const ContactsBlock: React.FunctionComponent<ContactsBlockProps> = ({
  classes,
  openedMenu,
  text,
  position = Position.RIGHT,
  classesContent,
  classesText,
  classesTitle,
  classesMail,
  title,
}) => {
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const refNoneGrid =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const mailRef =
    useRef<HTMLAnchorElement>() as React.MutableRefObject<HTMLAnchorElement | null>;
  const refMapPoint =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const refTitle =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  const router = useRouter();
  const isLaptop = useIsLaptop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const isSpaceBooking = router.pathname === constantsRoutes.spacebooking;
  const isGastehaus = router.pathname === constantsRoutes.gastehaus;
  const isBlogId = router.pathname === constantsRoutes.blogId;
  const isBlog = router.pathname === constantsRoutes.blog;
  const isContacts = router.pathname === constantsRoutes.contacts;

  const mailBtnClasses = classNames(
    styles.mailBtnMob,
    classes && [styles[classes]],
  );
  const contactsWrapperClasses = classNames(styles.contactsWrapper, {
    [styles.contactsPage]: isContacts,
    [styles.blogPage]: isBlogId,
    [styles.blog]: isBlog,
    [styles.contactsWrapperGastehaus]: isGastehaus,
    [styles.wrapperSpaceBooking]: isSpaceBooking,
  });
  const contactsContentClasses = classNames(
    styles.contactsContent,
    classesContent && [styles[classesContent]],
  );
  const contactsTitleClasses = classNames(
    styles.contactsTitle,
    classesTitle && [styles[classesTitle]],
  );
  const contactsTextClasses = classNames(
    styles.contactsText,
    classesText && [styles[classesText]],
  );
  const mailClasses = classNames(
    styles.mailBtn,
    classesMail && [styles[classesMail]],
  );

  const activeLink = () => {
    if (mailRef.current && isSpaceBooking) {
      mailRef.current.style.visibility = 'active';
    }
  };

  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={contactsWrapperClasses}
      ref={!text ? refGridWrapper : refNoneGrid}
      data-header="black"
    >
      {!isSpaceBooking && !isGastehaus && !isMobile && (
        <>
          <div className={styles.contactsMap}>
            <Image
              src={
                isLaptop
                  ? '/images/map-laptop.png'
                  : isTablet
                  ? '/images/map-tablet.png'
                  : '/images/map.png'
              }
              alt="map"
              layout="fill"
            />
          </div>
          <div ref={refMapPoint} className={styles.contactsMapPin}>
            <Image src={'/images/cursors/pin.png'} alt="pin" layout="fill" />
          </div>
        </>
      )}
      <div className={contactsContentClasses}>
        <h2 className={contactsTitleClasses}>
          {title || (
            <p>
              Let&apos;s make your service
              <br /> the best choice for the users
            </p>
          )}
        </h2>
        <div className={contactsTextClasses}>
          {text || (
            <p>
              Our team can be the best guide to reach your goal.
              <br /> Contact Us
            </p>
          )}
        </div>
        {!isSpaceBooking && !isGastehaus && (
          <div className={styles.contactsAddress}>
            <div className={styles.lineTitleWrapper}>
              <h2 ref={refTitle} className={styles.contactsAddressTitle}>
                BandaPixels LLC
              </h2>
              {isTablet && (
                <LineTablet refTitle={refTitle} refMapPoint={refMapPoint} />
              )}
            </div>
            <div className={styles.contactsAddressText}>
              <div className={styles.mapPin}>
                <Image
                  src={`/images/icons/map-pin${isMobile ? '-mobile' : ''}.svg`}
                  alt="map-pin"
                  width={32}
                  height={32}
                />
              </div>

              <span>
                st. Adama Branickiego 21 lok. U3 <br /> 02-972 Warsaw, Poland
              </span>
            </div>
          </div>
        )}
        <a
          ref={mailRef}
          href="mailto:info@bandapixels.com"
          className={mailClasses}
          onClick={activeLink}
        >
          info@bandapixels.com
        </a>
      </div>
      <div className={classNames(styles.contactsSocial, styles[position])}>
        <SocialList openedMenu={openedMenu} />
        <a href="mailto:info@bandapixels.com" className={mailBtnClasses}>
          info@bandapixels.com
        </a>
      </div>
    </section>
  );
};

export default ContactsBlock;
