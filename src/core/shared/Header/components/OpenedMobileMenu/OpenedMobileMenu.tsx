import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import useBlockScroll from '../../../../utils/useBlockScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import MenuList from '../MenuList/MenuList';
import SocialList from '../SocialList/SocialList';
import styles from './openedMobileMenu.module.scss';

interface MenuProps {
  openedMenu?: boolean;
}

const OpenedMobileMenu: React.FunctionComponent<MenuProps> = ({
  openedMenu,
}) => {
  const isMobile = useIsMobile();
  const [shouldRender, setRender] = useState(openedMenu);
  const classes = classNames(styles.openedMobileWrapper, {
    [styles.slideUp]: !openedMenu,
    [styles.slideDown]: openedMenu,
  });

  useBlockScroll([!!openedMenu && isMobile]);

  useEffect(() => {
    if (openedMenu) setRender(true);
  }, [openedMenu]);

  const onAnimationEnd = (): void => {
    if (!openedMenu) setRender(false);
  };

  return shouldRender ? (
    <div className={classes} onAnimationEnd={onAnimationEnd}>
      <MenuList />
      <div>
        <SocialList openedMenu={openedMenu} />
        <a href="mailto:marketing@bandapixels.com" className={styles.mailBtn}>
          marketing@bandapixels.com
        </a>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default OpenedMobileMenu;
