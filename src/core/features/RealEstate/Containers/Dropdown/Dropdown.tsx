import { FC } from 'react';
import styles from './dropdown.module.scss';
import { Category } from '../../../../shared/interfaces/categoryData';
import Link from 'next/link';
import { Icon } from '../../../../shared/coreUi/Icon/Icon';
import classNames from 'classnames';

type DropdownProps = {
  category: Category;
  isOpen: boolean;
  onClick: () => void;
};

export const Dropdown: FC<DropdownProps> = ({ category, isOpen, onClick }) => {
  const addActiveClass = (className: string, isOpen: boolean): string => {
    return classNames(className, isOpen && styles.active);
  };

  return (
    <div
      key={category.id}
      className={addActiveClass(styles.dropdownWrapper, isOpen)}
      onClick={onClick}
    >
      <div className={addActiveClass(styles.dropdownText, isOpen)}>
        <span className={addActiveClass(styles.categoryName, isOpen)}>
          {category.name}
        </span>
        <Icon
          src={`/images/realEstate/svg/chevron-down.svg`}
          alt="chevron"
          width={16}
          height={16}
          classname={styles.chevron}
        />
      </div>
      <ul className={addActiveClass(styles.menu, isOpen)}>
        {category.realEstates.map(({ id, head, slug }) => {
          return (
            <li key={id} className={styles.menuItem}>
              <Link href={`/real-estate/${slug}`}>
                <a className={styles.menuItemLink}>
                  <span className={styles.menuItemText}>{head}</span>
                  <Icon
                    src="/images/realEstate/svg/arrow.svg"
                    alt="arrow"
                    width={15}
                    height={15}
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
