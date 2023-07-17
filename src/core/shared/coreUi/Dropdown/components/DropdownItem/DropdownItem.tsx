import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { memo, PropsWithChildren } from 'react';
import styles from './dropdownItem.module.scss';

export type DropdownItemType = {
  name?: string;
  href?: string;
  icon?: string;
  lastItem?: boolean;
};

const DropdownItem: React.FC<PropsWithChildren<DropdownItemType>> = ({
  name,
  href,
  icon,
  lastItem,
}) => {
  const router = useRouter();

  const handleLink = (): void => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <li
      className={classNames(styles.item, { [styles.lastItem]: lastItem })}
      onClick={handleLink}
    >
      <div className={styles.itemBlock}>
        {icon && (
          <div className={styles.icon}>
            <Image src={icon} alt={name} height={24} width={24} />
          </div>
        )}

        <span className={styles.link}>{name} </span>
      </div>
    </li>
  );
};

export default memo(DropdownItem);
