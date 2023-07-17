import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, MouseEvent } from 'react';
import styles from './footer-button.module.scss';

type FooterButtonProps = { title: string; disabled?: boolean };

const FooterButton: FC<FooterButtonProps> = ({ title, disabled }) => {
  const footerBtnClasses = classNames(styles.footerBtn, {
    [styles.disabled]: disabled,
  });

  return (
    <Link href="mailto:marketing@bandapixels.com">
      <a
        className={footerBtnClasses}
        onClick={(event: MouseEvent) => {
          disabled && event.preventDefault();
        }}
      >
        {title}
      </a>
    </Link>
  );
};

export default FooterButton;
