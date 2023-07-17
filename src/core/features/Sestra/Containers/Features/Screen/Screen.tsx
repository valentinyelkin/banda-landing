import classNames from 'classnames';
import React, { FC } from 'react';
import Heading, { HeadingProps, TextAlign } from '../../../Heading/Heading';
import InfoList from '../../../InfoList/InfoList';
import Media, { MediaPosition, MediaProps } from '../../../Media/Media';
import styles from './screen.module.scss';

export enum ScreenVariant {
  TOP = 'topScreen',
  BOTTOM = 'bottomScreen',
}

type ScreenProps = {
  variant: ScreenVariant;
  infoArray: string[];
  heading?: Pick<HeadingProps, 'topText' | 'bottomText'>;
  image: Pick<MediaProps, 'src' | 'alt' | 'imagePosition'>;
};

const Screen: FC<ScreenProps> = ({ variant, infoArray, heading, image }) => {
  const screenClasses = classNames(styles.screen, styles[variant]);
  const mediaWrapperClasses = classNames(
    variant === ScreenVariant.TOP
      ? styles.mediaTopWrapper
      : styles.mediaBottomWrapper,
  );

  return (
    <div className={screenClasses}>
      <div className={styles.featuresInfo}>
        {heading && (
          <Heading
            topText={heading.topText}
            bottomText={heading.bottomText}
            textAlign={TextAlign.LEFT}
          />
        )}
        <InfoList infoArray={infoArray} />
      </div>
      <div className={mediaWrapperClasses}>
        <Media
          src={image.src}
          alt={image.alt}
          position={MediaPosition.RIGHT}
          imagePosition={image.imagePosition}
        />
      </div>
    </div>
  );
};

export default Screen;
