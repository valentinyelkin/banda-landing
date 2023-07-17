import { FC } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import styles from './item.module.scss';

export interface ItemProps {
  id?: number;
  firstStr: string;
  firstBold: string;
  secondStr: string;
  secondBold: string;
  classesStr?: string;
  classesContainer?: string;
  withLine?: boolean;
  withLineTop?: boolean;
  withLineFeaturesLeft?: boolean;
  withLineFeaturesRight?: boolean;
}

const Item: FC<ItemProps> = ({
  firstBold,
  firstStr,
  secondBold,
  secondStr,
  classesStr,
  classesContainer,
  withLine,
  withLineTop,
  withLineFeaturesLeft,
  withLineFeaturesRight,
}) => {
  const strStyles = classnames(styles.str, classesStr && [styles[classesStr]]);
  const containerStyles = classnames(
    styles.containerItem,
    classesContainer && [styles[classesContainer]],
  );

  return (
    <li className={containerStyles}>
      <div className={styles.square} />
      <span className={styles.wrapper}>
        <span className={styles.boldStr}>{firstBold}</span>
        <span className={strStyles}>{firstStr}</span>
        <span className={styles.boldStr}>{secondBold}</span>
        <span className={strStyles}>{secondStr}</span>
      </span>
      {withLine && (
        <>
          <div className={styles.lineBottom}>
            <Image
              src="/images/projects/SpaceBooking/functionality/line_bottom_xl.svg"
              alt="line"
              layout="fill"
            />
          </div>
          <div className={styles.lineBottomLaptop}>
            <Image
              src="/images/projects/SpaceBooking/functionality/line_bottom_l.svg"
              alt="line"
              layout="fill"
            />
          </div>
          <div className={styles.lineBottomMobile}>
            <Image
              src="/images/projects/SpaceBooking/functionality/line_bottom_m.svg"
              alt="line"
              layout="fill"
            />
          </div>
        </>
      )}
      {withLineTop && (
        <>
          <div className={styles.lineTop}>
            <Image
              src="/images/projects/SpaceBooking/functionality/line_top_l.svg"
              alt="line"
              width="128"
              height="67"
            />
          </div>
          <div className={styles.lineTopMobile}>
            <Image
              src="/images/projects/SpaceBooking/functionality/line_top_m.svg"
              alt="line"
              layout="fill"
            />
          </div>
        </>
      )}
      {withLineFeaturesLeft && (
        <>
          <div className={styles.lineLeft}>
            <Image
              src="/images/projects/SpaceBooking/features/line_left.svg"
              alt="line"
              width="464"
              height="26"
            />
          </div>
          <div className={styles.lineLeftLaptop}>
            <Image
              src="/images/projects/SpaceBooking/features/line_left_l.svg"
              alt="line"
              width="309"
              height="82"
            />
          </div>
          <div className={styles.lineLeftTablet}>
            <Image
              src="/images/projects/SpaceBooking/features/line_left_t.svg"
              alt="line"
              width="391"
              height="148"
            />
          </div>
        </>
      )}
      {withLineFeaturesRight && (
        <>
          <div className={styles.lineRight}>
            <Image
              src="/images/projects/SpaceBooking/features/line_right.svg"
              alt="line"
              width="71"
              height="180"
            />
          </div>
          <div className={styles.lineRightTablet}>
            <Image
              src="/images/projects/SpaceBooking/features/line_right_t.svg"
              alt="line"
              width="612"
              height="207"
            />
          </div>
        </>
      )}
    </li>
  );
};

export default Item;
