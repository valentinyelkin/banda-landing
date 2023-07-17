import React from 'react';
import Input from '../../../../../../../shared/coreUi/Input/Input';
import { DiscussTheProjectInterface } from '../../../../../../../shared/interfaces/formData';
import styles from '../../discussTheProject.module.scss';

interface FormContactsProps {
  handlerOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: DiscussTheProjectInterface;
}

const FormContacts: React.FunctionComponent<FormContactsProps> = ({
  handlerOnChange,
  formData,
}) => {
  return (
    <div className={styles.formContacts}>
      <h6>Your contacts</h6>
      <Input
        id="discuss-name"
        type="text"
        name="name"
        handlerOnChange={handlerOnChange}
        value={formData.name.value}
        error={formData.name.error}
      >
        Name<span className={styles.inputTextStar}>*</span>
      </Input>
      <Input
        id="discuss-company"
        type="text"
        name="company"
        handlerOnChange={handlerOnChange}
        value={formData.company.value}
        error={formData.company.error}
      >
        Company
        <span
          style={{
            display: 'inline',
            fontSize: '11px',
            position: 'relative',
            top: '-5px',
            right: '-1px',
          }}
        >
          *
        </span>
      </Input>
      <Input
        id="discuss-email"
        type="email"
        name="email"
        handlerOnChange={handlerOnChange}
        value={formData.email.value}
        error={formData.email.error}
        required={true}
      >
        Email
        <span
          style={{
            display: 'inline',
            fontSize: '11px',
            position: 'relative',
            top: '-5px',
            right: '-1px',
          }}
        >
          *
        </span>
      </Input>
      <Input
        id="discuss-skype"
        type="text"
        name="skype"
        handlerOnChange={handlerOnChange}
        value={formData.skype.value}
        error={formData.skype.error}
      >
        Skype
      </Input>
    </div>
  );
};

export default FormContacts;
