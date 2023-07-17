import React, { FC } from 'react';
import styles from './footer-socials.module.scss';
import SocialLink, { SocialLinkProps } from './SocialLink/SocialLink';

type FooterSocialsProps = {
  socialsList: SocialLinkProps[];
};

const FooterSocials: FC<FooterSocialsProps> = ({ socialsList }) => {
  return (
    <ul className={styles.footerSocials}>
      {socialsList.map((item) => {
        return (
          <SocialLink
            icon={item.icon}
            link={item.link}
            title={item.title}
            key={item.title}
            disabled={item.disabled}
          />
        );
      })}
    </ul>
  );
};

export default FooterSocials;
