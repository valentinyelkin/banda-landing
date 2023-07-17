import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { changeSection } from '../FullPageScroll/fullPageScroll.actions';
import { getSection } from '../FullPageScroll/fullPageScroll.selectors';
import { AppState } from '../../store/store';
import Button from '../coreUi/Button/Button';
import MenuList from './components/MenuList/MenuList';
import OpenedMobileMenu from './components/OpenedMobileMenu/OpenedMobileMenu';
import Arrow from '../Icons/Arrow/Arrow';

import styles from './header.module.scss';
import Link from 'next/link';
import { constantsRoutes } from '../routes';

const Header: React.FunctionComponent = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const headerRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const activeSection = useSelector((state: AppState) => getSection(state));
  const dispatch = useDispatch();
  const router = useRouter();
  const casesPages = [
    '/gastehaus',
    '/appnavi',
    '/sunup',
    '/shed',
    '/dcr',
    '/casekeepers',
    '/arxonas',
    '/bree',
    '/spacebooking',
    '/hotel',
    '/sestra',
    '/insidely',
  ];
  const otherPages = [
    '/careers',
    '/careers/[id]',
    '/blog/[id]',
    '/real-estate/[id]',
  ];

  const handlerOpenMobileMenu = (): void => {
    setOpenedMenu(!openedMenu);
  };

  const scrollToSection = (scrollTo: number, section = activeSection): void => {
    const needToScroll = (scrollTo - section) * -100;
    const wrapper = document.getElementById('fullpageWrapper') as HTMLElement;
    const scrollHeight = +(
      wrapper.getAttribute('style')?.replace(/[^-\d]/g, '') || 0
    );

    if (needToScroll !== 0) {
      wrapper.style.transform = `translateY(${scrollHeight + needToScroll}vh)`;
      dispatch(changeSection(scrollTo));
    }
  };

  const handlerLogoClick = (): void => {
    if (router.pathname !== '/') {
      router.push('/');
    } else {
      scrollToSection(0);
    }
  };

  const headerStyles = classNames(styles.header, {
    [styles.openedMenuWrapper]: openedMenu,
    [styles.smallYellowHeader]: router.pathname === constantsRoutes.form,
    [styles.blogHeader]: router.pathname === constantsRoutes.projects,
    [styles.casesHeader]: casesPages.includes(router.pathname),
    [styles.headerCareer]: otherPages.includes(router.pathname),
    [styles.smallFullYellowHeader]: router.route === constantsRoutes.error,
    [styles.headerStyles]: router.route === constantsRoutes.blogId,
  });

  const handlerScrollInCases = (): void => {
    const header = headerRef.current;

    if (!header) return;

    if (window.scrollY > 200) {
      header.classList.add(styles.smallCasesHeader);
    } else {
      header.classList.remove(styles.smallCasesHeader);
    }
  };

  useEffect(() => {
    if (casesPages.includes(router.pathname)) {
      window.addEventListener('scroll', handlerScrollInCases);
    }

    return (): void =>
      window.removeEventListener('scroll', handlerScrollInCases);
  }, []);

  return (
    <header id="header" className={headerStyles} ref={headerRef}>
      <div className={styles.logoWrapper} onClick={handlerLogoClick}>
        <div className={styles.bigBlackLogo} />
      </div>
      <div className={styles.headerLeftPart}>
        <MenuList />
        <Link href={'/form'}>
          <a>
            <button className={styles.headerBtn}>
              <div>
                <span>discuss the project</span>
                <Arrow />
              </div>
            </button>
          </a>
        </Link>
      </div>
      <Button
        classes={openedMenu ? 'menuSwitchBtnBlack' : 'menuSwitchBtn'}
        handlerClick={handlerOpenMobileMenu}
      />
      <OpenedMobileMenu openedMenu={openedMenu} />
    </header>
  );
};

export default Header;
