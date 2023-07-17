import classNames from 'classnames';
import React, { PropsWithChildren, useRef, useState } from 'react';
import useOutsideClick from '../../../utils/useOutsideClick';
import { DropdownItemType } from './components/DropdownItem/DropdownItem';
import DropdownList from './components/DropdownList/DropdownList';
import styles from './dropdown.module.scss';

export enum Toggler {
  HOVER = 'hover',
  CLICK = 'click',
}

interface DropdownProps {
  items?: DropdownItemType[];
  toggler?: Toggler;
  className?: string;
  rows?: number;
  maxWidth?: number | string;
  maxHeight?: number | string;
  disableOverlay?: boolean;
}

const Dropdown: React.FC<PropsWithChildren<DropdownProps>> = ({
  items,
  toggler = Toggler.HOVER,
  children,
  className,
  rows,
  maxWidth,
  maxHeight,
  disableOverlay,
}) => {
  const dorpdownRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const close = (): void => {
    if (isActive) {
      setIsActive(false);
    }
  };

  const handleOnMouseEnter = (): void => {
    if (toggler === Toggler.HOVER) {
      setIsActive(true);
    }
  };

  const handleOnMouseLeave = (): void => {
    if (toggler === Toggler.HOVER) {
      setIsActive(false);
    }
  };

  const handleOnClick = (): void => {
    if (toggler === Toggler.CLICK) {
      setIsActive(!isActive);
    }
  };

  useOutsideClick(dorpdownRef, close);

  return (
    <div
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      className={classNames(styles.dropdown, {
        [styles.disableOverlay]: disableOverlay,
      })}
    >
      <div onClick={handleOnClick}>{children}</div>
      <div ref={dorpdownRef} className={className}>
        <DropdownList
          disableOverlay={disableOverlay}
          isActive={isActive}
          items={items}
          rows={rows}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        />
      </div>
    </div>
  );
};

export default Dropdown;
