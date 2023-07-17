import classNames from 'classnames';
import { useRouter } from 'next/router';
import useIsScreenSize from '../../../../utils/useIsScreenSize';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ScreenSize } from '../../../../utils/useIsMobile';
import Dropdown, { Toggler } from '../../../coreUi/Dropdown/Dropdown';
import { changeSection } from '../../../FullPageScroll/fullPageScroll.actions';
import styles from './menuItem.module.scss';

type SubMenuType = {
  name?: string;
  href?: string;
  icon?: string;
};

interface MenuItemProps {
  name: string;
  href?: string;
  subMenu?: SubMenuType[];
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  subMenu,
  name,
  href,
}) => {
  const isTablet = useIsScreenSize(0, ScreenSize.TABLET);
  const router = useRouter();
  const dispatch = useDispatch();
  const linkStyles = classNames(styles.menuItemLink, {
    [styles.activeLink]:
      href === router.pathname || `${href}/[id]` === router.pathname,
    [styles.contactsHeader]: router.pathname === '/contacts',
  });

  const changeLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): void => {
    e.preventDefault();

    if (href && router.pathname !== href) {
      dispatch(changeSection(0));
      router.push(href);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <li className={styles.menuItem}>
      {subMenu?.length ? (
        <Dropdown
          toggler={isTablet ? Toggler.CLICK : Toggler.HOVER}
          disableOverlay={isTablet}
          items={subMenu}
          className={styles.subMenu}
          maxWidth={isTablet ? 'none' : 700}
          rows={isTablet ? 0 : 5}
        >
          <a className={linkStyles}>{name}</a>
        </Dropdown>
      ) : (
        <a className={linkStyles} href={href} onClick={changeLink}>
          {name}
        </a>
      )}
    </li>
  );
};

export default MenuItem;
