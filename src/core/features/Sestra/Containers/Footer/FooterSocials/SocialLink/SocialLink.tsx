import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, MouseEvent, ReactNode } from 'react';
import styles from './social-link.module.scss';

export type SocialLinkProps = {
  icon: ReactNode;
  link: string;
  title: string;
  disabled?: boolean;
};

const SocialLink: FC<SocialLinkProps> = ({ icon, link, title, disabled }) => {
  const socialLinkClasses = classNames(styles.socialLink, {
    [styles.disabled]: disabled,
  });

  return (
    <Link href={link} passHref>
      <li className={styles.social}>
        <a
          className={socialLinkClasses}
          aria-label={title}
          onClick={(event: MouseEvent) => {
            disabled && event.preventDefault();
          }}
        >
          {icon}
        </a>
      </li>
    </Link>
  );
};

export default SocialLink;
