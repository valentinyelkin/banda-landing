import { FC } from 'react';
import classnames from 'classnames';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './title.module.scss';

interface TitleProps {
  title: string;
  classesTitle?: string;
  classesWrapper?: string;
  tag?: boolean;
}

const Title: FC<TitleProps> = ({
  title,
  classesTitle,
  classesWrapper,
  tag,
}) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  const titleStyles = classnames(
    styles.title,
    classesTitle && [styles[classesTitle]],
  );
  const wrapperStyles = classnames(
    styles.wrapper,
    classesWrapper && [styles[classesWrapper]],
  );

  return (
    <>
      <div className={wrapperStyles}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={0.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          {!tag ? (
            <h2 className={titleStyles}>{title}</h2>
          ) : (
            <h1 className={titleStyles}>{title}</h1>
          )}
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Title;
