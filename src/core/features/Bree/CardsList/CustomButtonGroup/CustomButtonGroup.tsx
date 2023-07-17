import { FC } from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import CustomLeftArrow from '../CustomLeftArrow/CustomLeftArrow';
import CustomRightArrow from '../CustomRightArrow/CustomRightArrow';
import classNames from 'classnames';
import { constantsRoutes } from '../../../../shared/routes';
import { useRouter } from 'next/router';
import styles from './customButtonGroup.module.scss';

interface IButtonGroup extends ButtonGroupProps {
  setScroll?: (state: boolean) => void;
}

const CustomButtonGroup: FC<IButtonGroup> = ({ previous, next, setScroll }) => {
  const router = useRouter();
  const isRealEstate = router.route === constantsRoutes.realEstate;
  const stylesCustomButton = classNames({
    [styles.containerRealEstate]: isRealEstate,
  });

  return (
    <div
      className={stylesCustomButton}
      onClick={() => setScroll && setScroll(false)}
    >
      <CustomLeftArrow
        classes="arrowPrevRealEstate"
        onClick={previous}
        setScroll={setScroll}
      />
      <CustomRightArrow
        classes="arrowNextRealEstate"
        onClick={next}
        setScroll={setScroll}
      />
    </div>
  );
};

export default CustomButtonGroup;
