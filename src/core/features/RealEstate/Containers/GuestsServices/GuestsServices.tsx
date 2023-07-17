import React, { FC, useEffect, useRef, useState } from 'react';
import { strings } from '../../../../lists/realEstate';
import useGrid from '../../../../utils/useGrid';
import useRedrawGrid from '../../../../utils/useRedrawGrid';
import { Dropdown } from '../Dropdown/Dropdown';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './guestsServices.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../../store/store';
import { getByPageNameCategories } from '../../realEstate.selectors';
import { separateByColumns } from '../FinanceServices/FinanceServices';
import { GetCategoriesByPageName } from '../../realEstate.actions';

const GuestsServices: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const categoriesData = useSelector((state: AppState) =>
    getByPageNameCategories(state, strings.titleGuests),
  );

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const selects = separateByColumns(categoriesData, isTablet, isMobile);
  const firstColumn = selects[0];
  const secondColumn = selects[1];

  useGrid(refGridWrapper, 'rgba(23,23,24,0.1)', '#fff');
  useRedrawGrid(refGridWrapper);

  useEffect(() => {
    dispatch(new GetCategoriesByPageName(strings.titleGuests));
  }, []);

  return (
    <section
      className={styles.container}
      ref={refGridWrapper}
      data-header="yellow"
    >
      <h2 className={styles.title}>{strings.titleGuests}</h2>
      <div className={styles.wrapperSelects}>
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
        {!isMobile && (
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
        <div className={styles.wrapperBackground} />
      </div>
    </section>
  );
};

export default GuestsServices;
