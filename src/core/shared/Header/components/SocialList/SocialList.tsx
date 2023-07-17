import React from 'react';
import { useRouter } from 'next/router';
import SocialItem from '../SocialItem/SocialItem';
import classNames from 'classnames';
import { constantsRoutes } from '../../../routes';
import stylesItem from '../SocialItem/socialItem.module.scss';
import styles from './socialList.module.scss';

interface SocialListProps {
  openedMenu?: boolean;
}

const SocialList: React.FunctionComponent<SocialListProps> = ({
  openedMenu,
}) => {
  const router = useRouter();
  const isArticle = router.route === constantsRoutes.blogId;
  const isGastehause = router.route === constantsRoutes.gastehaus;
  const isBree = router.route === constantsRoutes.bree;
  const isSpaceBooking = router.route === constantsRoutes.spacebooking;
  const isHotelCommunity =
    router.route === constantsRoutes.hotelCommunityPlatform;
  const isInsidely = router.route === constantsRoutes.insidely;
  const socialItems = [
    {
      [`classes${constantsRoutes.spacebooking}`]: `${
        !openedMenu ? 'socialLinkedinViolet' : 'socialLinkedin'
      }`,
      [`classes${constantsRoutes.bree}`]: `${
        !openedMenu ? 'socialLinkedinOrange' : 'socialLinkedin'
      }`,
      [`classes${constantsRoutes.insidely}`]: `${
        !openedMenu ? 'socialLinkedin' : 'socialLinkedin'
      }`,
      classes: `${
        isArticle && !openedMenu ? 'socialLinkedinBlog' : 'socialLinkedin'
      }`,
      href: `${
        isGastehause
          ? 'https://www.linkedin.com/in/vladimir-voloshin-bandapixels/'
          : 'https://www.linkedin.com/organization-guest/company/bandapixels'
      }`,
    },
    {
      [`classes${constantsRoutes.spacebooking}`]: `${
        !openedMenu ? 'socialFacebookViolet' : 'socialFacebook'
      }`,
      [`classes${constantsRoutes.bree}`]: `${
        !openedMenu ? 'socialFacebookOrange' : 'socialFacebook'
      }`,
      classes: `${
        isArticle && !openedMenu ? 'socialFacebookBlog' : 'socialFacebook'
      }`,
      href: `${
        isGastehause || isBree
          ? 'https://www.facebook.com/BandaPixels.Software.Development.Company'
          : 'https://www.facebook.com/BandaPixels/'
      }`,
    },
    {
      [`classes${constantsRoutes.spacebooking}`]: `${
        !openedMenu ? 'socialWhatsAppViolet' : 'socialWhatsApp'
      }`,
      [`classes${constantsRoutes.bree}`]: `${
        !openedMenu ? 'socialWhatsAppOrange' : 'socialWhatsApp'
      }`,
      classes: `${
        isArticle && !openedMenu ? 'socialWhatsAppBlog' : 'socialWhatsApp'
      }`,
      href: 'https://wa.me/380634373616',
    },
    {
      [`classes${constantsRoutes.spacebooking}`]: `${
        !openedMenu ? 'socialBehanceBlogViolet' : 'socialBehance'
      }`,
      [`classes${constantsRoutes.bree}`]: `${
        !openedMenu ? 'socialBehanceBlogOrange' : 'socialBehance'
      }`,
      classes: `${
        isArticle && !openedMenu ? 'socialBehanceBlog' : 'socialBehance'
      }`,
      href: 'https://www.behance.net/bandapixels',
    },
    {
      [`classes${constantsRoutes.spacebooking}`]: `${
        !openedMenu ? 'socialDribbleBlogViolet' : 'socialDribble'
      }`,
      [`classes${constantsRoutes.bree}`]: `${
        !openedMenu ? 'socialDribbleBlogOrange' : 'socialDribble'
      }`,
      classes: `${
        isArticle && !openedMenu ? 'socialDribbleBlog' : 'socialDribble'
      }`,
      href: 'https://dribbble.com/bandapixels',
    },
  ];

  const socialWrapperClasses = classNames({
    [styles.socialWrapper]: openedMenu,
    [styles.socialWrapperGastehaus]: isGastehause,
  });
  const socialListClasses = classNames(styles.socialList, {
    [styles.socialListBree]: isBree && !openedMenu,
    [styles.socialListSpaceBooking]: isSpaceBooking,
    [styles.socialListHotelCommunity]: isHotelCommunity,
    [styles.socialListInsidely]: isInsidely,
  });
  const socialIconClasses = classNames({
    [stylesItem.socialIconActive]: openedMenu,
    [stylesItem.socialIcon]: !openedMenu,
    [stylesItem.socialIconGastehaus]: isGastehause,
    [stylesItem.openedBurgerGastehaus]: isGastehause && openedMenu,
    [stylesItem.socialIconBree]: isBree,
    [stylesItem.openedBurgerBree]: isBree && openedMenu,
    [stylesItem.socialIconSpaceBooking]: isSpaceBooking && !openedMenu,
    [stylesItem.openBurgerSpaceBooking]: isSpaceBooking && openedMenu,
    [stylesItem.socialIconHotelCommunity]: isHotelCommunity && !openedMenu,
    [stylesItem.socialIconInsidely]: isInsidely && !openedMenu,
  });
  const socialItemClasses = classNames(stylesItem.socialItem, {
    [stylesItem.socialItemBurgerMenu]: openedMenu,
    [stylesItem.socialItemBree]: isBree,
    [stylesItem.socialItemSpaceBooking]: isSpaceBooking,
    [stylesItem.socialItemHotelCommunity]: isHotelCommunity,
    [stylesItem.socialItemInsidely]: isInsidely,
  });
  return (
    <div className={socialWrapperClasses}>
      <ul className={socialListClasses}>
        {socialItems.map((socialItem) => (
          <SocialItem
            classes={socialItem[`classes${router.route}`] ?? socialItem.classes}
            href={socialItem.href}
            key={socialItem.classes}
            itemClasses={socialItemClasses}
            iconClasses={socialIconClasses}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialList;
