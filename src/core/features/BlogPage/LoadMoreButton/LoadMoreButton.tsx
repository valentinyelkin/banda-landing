import React, { FC } from 'react';

import stylesBtn from '../../../shared/coreUi/Button/button.module.scss';
import styles from './load-more-button.module.scss';
import classNames from 'classnames';

type CustomButtonGroupProps = {
  clickHandler: () => void;
};

const LoadMoreButton: FC<CustomButtonGroupProps> = ({ clickHandler }) => {
  const loadMoreButtonClasses = classNames(
    stylesBtn.sliderBtnWrapper,
    styles.sliderBtnWrapper,
  );

  return (
    <div className={loadMoreButtonClasses}>
      <button onClick={clickHandler} className={styles.loadMoreBtn}>
        load more posts
      </button>
    </div>
  );
};

export default LoadMoreButton;
