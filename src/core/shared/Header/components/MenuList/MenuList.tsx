import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './menuList.module.scss';

const MenuList: React.FunctionComponent = () => {
  const menuItems = [
    {
      name: 'Main',
      href: '/',
    },
    {
      name: 'Services',
      href: '/services',
      subMenu: [
        {
          name: 'Custom services',
          href: '/services',
          icon: '/images/icons/services/settings.svg',
        },
        {
          name: 'Real Estate',
          href: '/real-estate',
          icon: '/images/icons/services/hotel.svg',
        },
      ],
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Careers',
      href: '/careers',
    },
    {
      name: 'Contacts',
      href: '/contacts',
    },
  ];

  return (
    <nav className={styles.navBarMenu}>
      <ul className={styles.menuList}>
        {menuItems.map(({ name, href, subMenu }) => (
          <MenuItem subMenu={subMenu} name={name} href={href} key={name} />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
