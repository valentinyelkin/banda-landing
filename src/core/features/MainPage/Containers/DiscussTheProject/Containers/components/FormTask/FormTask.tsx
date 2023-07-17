import React from 'react';
import Textarea from '../../../../../../../shared/coreUi/Textarea/Textarea';
import { DiscussTheProjectInterface } from '../../../../../../../shared/interfaces/formData';
import styles from '../../discussTheProject.module.scss';

interface FormTaskProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  formData: DiscussTheProjectInterface;
}

const FormTask: React.FunctionComponent<FormTaskProps> = ({
  handlerOnChange,
  formData,
}) => {
  return (
    <div className={styles.formTask}>
      <h6>Task*</h6>
      <Textarea
        name="task"
        placeholder="write task..."
        handlerOnChange={handlerOnChange}
        value={formData.task.value}
        error={formData.task.error}
      />
    </div>
  );
};

export default FormTask;
