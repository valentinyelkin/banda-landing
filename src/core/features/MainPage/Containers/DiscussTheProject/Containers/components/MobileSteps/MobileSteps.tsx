import React from 'react';
import styles from './mobileSteps.module.scss';

import Button from '../../../../../../../shared/coreUi/Button/Button';

interface MobileStepsProps {
  step: number;
  handlerChangeStep: () => void;
  handlerSubmit: () => void;
}

const MobileSteps: React.FunctionComponent<MobileStepsProps> = ({
  step,
  handlerChangeStep,
  handlerSubmit,
}) => {
  return (
    <div className={styles.stepWrapper}>
      <p className={styles.currentStep}>{step} / 2</p>
      <div className={styles.stepProgress} />
      {step === 1 && (
        <Button
          classes="yellowBtnWithIcon"
          type="button"
          handlerClick={handlerChangeStep}
        >
          <div>
            Next Step
            <img src="/images/icons/arrow.svg" alt="arrow" />
          </div>
        </Button>
      )}
      {step === 2 && (
        <Button
          classes="yellowBtnWithIcon"
          type="submit"
          handlerClick={handlerSubmit}
        >
          <div>
            Send
            <img src="/images/icons/arrow.svg" alt="arrow" />
          </div>
        </Button>
      )}
    </div>
  );
};

export default MobileSteps;
