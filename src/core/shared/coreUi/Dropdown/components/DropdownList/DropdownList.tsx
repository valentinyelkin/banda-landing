import classNames from 'classnames';
import { memo } from 'react';
import DropdownItem, { DropdownItemType } from '../DropdownItem/DropdownItem';
import styles from './dropdownList.module.scss';

interface DropdownListProps {
  isActive: boolean;
  items?: DropdownItemType[];
  rows?: number;
  maxWidth?: number | string;
  maxHeight?: number | string;
  disableOverlay?: boolean;
}

const DropdownList: React.FC<DropdownListProps> = ({
  isActive,
  items,
  rows = 0,
  maxWidth = 'none',
  maxHeight = 'none',
  disableOverlay,
}) => {
  return (
    <div
      className={classNames(styles.dropdownListWrapper, {
        [styles.disableOverlay]: disableOverlay,
        [styles.active]: isActive,
      })}
    >
      <ul
        style={{
          maxHeight,
          maxWidth,
          gridTemplateRows: `repeat(${rows}, auto)`,
          gridAutoFlow: rows ? 'column' : 'row',
        }}
        className={classNames(styles.dropdownList, {
          [styles.active]: isActive,
        })}
      >
        {items?.map(({ name, href, icon }, index: number) => (
          <DropdownItem
            lastItem={(index + 1) % rows === 0}
            key={name}
            name={name}
            href={href}
            icon={icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(DropdownList);
