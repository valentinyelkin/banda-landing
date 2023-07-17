import React, { CSSProperties, FC } from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image, { ImageProps } from 'next/image';
import styles from './media.module.scss';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import useIsScreenSize from '../../../utils/useIsScreenSize';
import classNames from 'classnames';

export enum MediaPosition {
  LEFT = 'leftMedia',
  RIGHT = 'rightMedia',
}

export type MediaProps = {
  src: string;
  alt: string;
  position: MediaPosition;
  imagePosition: ImageProps['objectPosition'];
  wrapperStyles?: CSSProperties;
};

const Media: FC<MediaProps> = ({
  src,
  alt,
  position,
  imagePosition,
  wrapperStyles,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isMoreThenDesktop = useIsScreenSize(1921);
  const mediaWrapperClasses = classNames(
    styles.mediaWrapper,
    styles[position],
    isMoreThenDesktop && styles.fullyBordered,
  );

  return (
    <AnimationOnScroll
      animationName={
        position === MediaPosition.LEFT
          ? AnimationNames.fadeInLeft
          : AnimationNames.fadeInRight
      }
      duration={1}
      as="div"
      disabledAnimation={isTablet || isMobile}
    >
      <div className={mediaWrapperClasses} style={wrapperStyles}>
        <Image
          alt={alt}
          src={src}
          objectFit="cover"
          objectPosition={imagePosition}
          layout="fill"
        />
      </div>
    </AnimationOnScroll>
  );
};

export default Media;
