import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import { constantsRoutes } from '../../routes';
import styles from './arrow.module.scss';

interface ArrowProps {
  arrowClass?: string;
  onClick?: () => void;
  currentSlide?: number;
  totalItems?: number;
}

export const Arrow: React.FunctionComponent<ArrowProps> = ({
  arrowClass,
  onClick,
  currentSlide,
  totalItems,
}) => {
  const router = useRouter();

  const isSpaceBooking = router.pathname === constantsRoutes.spacebooking;
  const isHotelCommunity =
    router.pathname === constantsRoutes.hotelCommunityPlatform;
  const isLeftDisabled = currentSlide === 0 && !totalItems;
  const isRightDisabled = (currentSlide && currentSlide + 1) === totalItems;

  const arrowStyle = classnames(
    styles.arrow,
    arrowClass && [styles[arrowClass]],
    (isLeftDisabled || isRightDisabled) &&
      isSpaceBooking &&
      styles.arrowSpaceBookingDisabled,
    (isLeftDisabled || isRightDisabled) &&
      isHotelCommunity &&
      styles.arrowHotelCommunityDisabled,
  );

  return (
    <div className={arrowStyle} onClick={onClick}>
      <div className={styles.line} />
    </div>
  );
};
