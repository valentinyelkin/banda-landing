import React from 'react';
import RadioButton from '../../../../../../../shared/coreUi/RadioButton/RadioButton';
import { DiscussTheProjectInterface } from '../../../../../../../shared/interfaces/formData';
import styles from '../../discussTheProject.module.scss';

interface FormProjectTypeProps {
  handlerOnChange?: (e: React.MouseEvent<HTMLInputElement>) => void;
  formData: DiscussTheProjectInterface;
}

const FormProjectType: React.FunctionComponent<FormProjectTypeProps> = ({
  handlerOnChange,
  formData,
}) => {
  return (
    <div className={styles.formProjectType}>
      <h6 className={formData.projectType.error ? styles.error : ''}>
        Project type*
      </h6>
      <div className={styles.projectRadioContainer}>
        <div className={styles.projectRadioRow}>
          <RadioButton
            id="type-1"
            value="We improve or expand a working service"
            name="projectType"
            handlerOnChange={handlerOnChange}
            error={formData.projectType.error}
          >
            We improve or expand a working service
          </RadioButton>
          <RadioButton
            id="type-2"
            value="We are developing a new service for everyone and we know exactly
            what we want"
            name="projectType"
            handlerOnChange={handlerOnChange}
            error={formData.projectType.error}
          >
            We are developing a new service for everyone and we know exactly
            what we want
          </RadioButton>
          <RadioButton
            id="type-3"
            value="We are a startup and want to make a cool MVP. We want to see a team
            that will help us."
            name="projectType"
            handlerOnChange={handlerOnChange}
            error={formData.projectType.error}
          >
            We are a startup and want to make a cool MVP. We want to see a team
            that will help us.
          </RadioButton>
        </div>
        <div className={styles.projectRadioRow}>
          <RadioButton
            id="type-4"
            value="We are doing a new service and want to make a design for it."
            name="projectType"
            handlerOnChange={handlerOnChange}
            error={formData.projectType.error}
          >
            We are doing a new service and want to make a design for it.
          </RadioButton>
          <RadioButton
            id="type-5"
            value="We want to make the design of the service more convenient and
            understandable for users."
            name="projectType"
            handlerOnChange={handlerOnChange}
            error={formData.projectType.error}
          >
            We want to make the design of the service more convenient and
            understandable for users.
          </RadioButton>
          <RadioButton
            id="type-6"
            value="Another variant"
            name="projectType"
            handlerOnChange={handlerOnChange}
            error={formData.projectType.error}
          >
            Another variant
          </RadioButton>
        </div>
      </div>
    </div>
  );
};

export default FormProjectType;
