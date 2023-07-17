import React from 'react';
import RadioButton from '../../../../../../../shared/coreUi/RadioButton/RadioButton';
import { DiscussTheProjectInterface } from '../../../../../../../shared/interfaces/formData';
import styles from '../../discussTheProject.module.scss';

interface FormBudgetProps {
  handlerOnChange?: (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  formData: DiscussTheProjectInterface;
}

const FormBudget: React.FunctionComponent<FormBudgetProps> = ({
  handlerOnChange,
  formData,
}) => {
  return (
    <div className={styles.formBudget}>
      <h6 className={formData.budget.error ? styles.error : ''}>Budget*</h6>
      <div className={styles.projectBudgetContainer}>
        <RadioButton
          id="budget-1"
          value="$ 5 000 - $ 10 000"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          $ 5 000 - $ 10 000
        </RadioButton>
        <RadioButton
          id="budget-2"
          value="$ 10 000 - $ 20 000"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          $ 10 000 - $ 20 000
        </RadioButton>
        <RadioButton
          id="budget-3"
          value="$ 20 000 - $ 30 000"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          $ 20 000 - $ 30 000
        </RadioButton>
        <RadioButton
          id="budget-4"
          value="$ 30 000 - $ 50 000"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          $ 30 000 - $ 50 000
        </RadioButton>
        <RadioButton
          id="budget-5"
          value="$ 50 000 - $ 100 000"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          $ 50 000 - $ 100 000
        </RadioButton>
        <RadioButton
          id="budget-6"
          value="$ 100 000 +"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          $ 100 000 +
        </RadioButton>
        <RadioButton
          id="budget-7"
          value="I need help"
          name="budget"
          smallInput
          handlerOnChange={handlerOnChange}
          error={formData.budget.error}
        >
          I need help
        </RadioButton>
      </div>
    </div>
  );
};

export default FormBudget;
