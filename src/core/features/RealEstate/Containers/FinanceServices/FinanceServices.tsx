import React, { FC, useEffect, useRef, useState } from 'react';
import useGrid from '../../../../utils/useGrid';
import useRedrawGrid from '../../../../utils/useRedrawGrid';
import { strings } from '../../../../lists/realEstate';
import { Dropdown } from '../Dropdown/Dropdown';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsLaptop from '../../../../utils/useIsLaptop';
import { getByPageNameCategories } from '../../realEstate.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../store/store';
import { GetCategoriesByPageName } from '../../realEstate.actions';
import styles from './financeServices.module.scss';
import { Category } from '../../../../shared/interfaces/categoryData';

export const separateByColumns = (
  categoryList: Category[],
  isTablet: boolean,
  isMobile: boolean,
): Category[][] => {
  const categoryListCopy = [...categoryList];
  const categoryListByCols = [] as Category[][];
  const itemsInColumn = isTablet ? 4 : isMobile ? 8 : 3;

  categoryList.forEach(() => {
    isTablet
      ? categoryListByCols.push(categoryListCopy.splice(0, itemsInColumn))
      : isMobile
      ? categoryListByCols.push(categoryListCopy.splice(0, itemsInColumn))
      : categoryListByCols.push(categoryListCopy.splice(0, itemsInColumn));
  });

  return categoryListByCols.filter((column) => column.length);
};

const FinanceServices: FC = () => {
  const isLaptop = useIsLaptop();
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const categoriesData = useSelector((state: AppState) =>
    getByPageNameCategories(state, strings.titleAdmin),
  );

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  useGrid(refGridWrapper, 'rgba(23,23,24,0.1)', '#fff');
  useRedrawGrid(refGridWrapper);

  useEffect(() => {
    dispatch(new GetCategoriesByPageName(strings.titleAdmin));
  }, []);

  const realEstateColumns = separateByColumns(
    categoriesData,
    isTablet,
    isMobile,
  );
  const firstColumn = realEstateColumns[0];
  const secondColumn = realEstateColumns[1];
  const thirdColumn = realEstateColumns[2];

  return (
    <section
      className={styles.container}
      ref={refGridWrapper}
      data-header="full-yellow"
    >
      <h2 className={styles.title}>{strings.titleAdmin}</h2>
      <div className={styles.containerSelects}>
        {(isTablet || isMobile || isLaptop) && (
          <div className={styles.wrapperColumn}>
            {firstColumn &&
              firstColumn.map((category) => {
                return (
                  <Dropdown
                    key={category.id}
                    category={category}
                    isOpen={openDropdownId === category.id}
                    onClick={() => {
                      setOpenDropdownId(
                        openDropdownId === category.id ? null : category.id,
                      );
                    }}
                  />
                );
              })}
          </div>
        )}
        {(isTablet || isLaptop) && !isMobile && (
          <div className={styles.wrapperColumn}>
            {secondColumn &&
              secondColumn.map((category) => {
                return (
                  <Dropdown
                    key={category.id}
                    category={category}
                    isOpen={openDropdownId === category.id}
                    onClick={() => {
                      setOpenDropdownId(
                        openDropdownId === category.id ? null : category.id,
                      );
                    }}
                  />
                );
              })}
          </div>
        )}
        {!isTablet && !isMobile && isLaptop && (
          <div className={styles.wrapperColumn}>
            {thirdColumn &&
              thirdColumn.map((category) => {
                return (
                  <Dropdown
                    key={category.id}
                    category={category}
                    isOpen={openDropdownId === category.id}
                    onClick={() => {
                      setOpenDropdownId(
                        openDropdownId === category.id ? null : category.id,
                      );
                    }}
                  />
                );
              })}
          </div>
        )}
      </div>
      <div className={styles.wrapperBackground} />
    </section>
  );
};

export default FinanceServices;
