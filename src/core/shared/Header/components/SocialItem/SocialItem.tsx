import React from 'react';
import styles from './socialItem.module.scss';

interface SocialItemProps {
  classes: string;
  href: string;
  itemClasses: string;
  iconClasses: string;
}

const SocialItem: React.FunctionComponent<SocialItemProps> = ({
  classes,
  href,
  itemClasses,
  iconClasses,
}) => {
  if (!classes) return <></>;
  return (
    <li className={itemClasses}>
      <a
        href={href}
        className={iconClasses}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className={styles[classes]} />
      </a>
    </li>
  );
};

export default SocialItem;
