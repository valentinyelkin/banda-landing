import React, { MutableRefObject, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './careersForm.module.scss';
import Input from '../../../../shared/coreUi/Input/Input';
import Textarea from '../../../../shared/coreUi/Textarea/Textarea';
import {
  ClearFormDataStatus,
  SendFormData,
} from '../../../MainPage/mainPage.actions';
import { AppState } from '../../../../store/store';
import { getStatus } from '../../../MainPage/mainPage.selector';
import ModalThanks from '../../../../shared/Modal/ModalThanks/ModalThanks';

const formInitialState = {
  name: {
    error: '',
    value: '',
  },
  phone: {
    error: '',
    value: '',
  },
  email: {
    error: '',
    value: '',
  },
  comment: {
    error: '',
    value: '',
  },
  file: {
    error: '',
    value: '',
  },
};

type FormProps = {
  title: string;
  rank: string;
  refForm: MutableRefObject<HTMLFormElement | null>;
};

const CareersForm: React.FunctionComponent<FormProps> = ({
  title,
  rank,
  refForm,
}) => {
  const [formSend, setFormSend] = useState(false);
  const [formData, setFormData] = useState({ ...formInitialState });
  const formStatus = useSelector((state: AppState) => getStatus(state));
  const dispatch = useDispatch();

  const handlerClosePopup = (): void => {
    setFormSend(!formSend);

    if (formStatus === 'success') {
      setFormData({ ...formInitialState });
      refForm?.current?.reset();
      dispatch(new ClearFormDataStatus());
    }
  };

  const formValidation = (data, change = false): number => {
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    const checkLength = ['name', 'phone', 'email', 'file'];
    let newData = { ...formData };

    Object.entries(data).forEach(
      ([formName, formValue]: [string, { error: string; value: string }]) => {
        let error = '';

        if (checkLength.includes(formName) && formValue.value.length === 0) {
          error = 'length';
        }

        if (formName === 'email' && !emailReg.test(formValue.value)) {
          error = 'email';
        }

        if (formName === 'phone' && !phoneReg.test(formValue.value)) {
          error = 'phone';
        }

        if (change && formValue.value.length === 0) {
          error = '';
        }

        newData = {
          ...newData,
          [formName]: { ...data[formName], error },
        };
      },
    );
    setFormData(newData);

    const errors = Object.entries(newData).filter(
      ([, info]: [string, { error: string; value: string }]) => info.error,
    );

    return errors?.length;
  };

  const handlerOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const input = e.target;
    const inputName: string = input.name;
    const inputVal: string = input.value;

    if (inputName in formData) {
      formValidation(
        {
          [inputName]: {
            ...formData[inputName],
            value: inputVal,
          },
        },
        true,
      );
    }
  };

  const handleFileInput = (e): void => {
    const file = e.target.files[0];
    if (
      (file.name.includes('.doc') ||
        file.name.includes('.docx') ||
        file.name.includes('.pdf')) &&
      file.size < 67108864
    ) {
      setFormData({
        ...formData,
        file: {
          error: '',
          value: file.name,
        },
      });
    } else {
      setFormData({
        ...formData,
        file: {
          error: 'error',
          value: '',
        },
      });
    }
  };

  const prepareDataToSend = (): FormData => {
    const formDataToSend = new FormData(
      document.querySelector('form') as HTMLFormElement,
    );
    const form = new FormData();
    form.append('email', formDataToSend.get('email') as FormDataEntryValue);
    form.append(
      'body',
      `Title: ${title} ${rank || ''}
            \nName: ${formDataToSend.get('name')}
            \nPhone: ${formDataToSend.get('phone')}
            \nComment: ${formDataToSend.get('comment')}`,
    );
    form.append('file', formDataToSend.get('file') as FormDataEntryValue);
    return form;
  };

  const handlerSendData = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const errors = formValidation(formData);

    if (!errors) {
      e.preventDefault();
      const dataToSend = prepareDataToSend();

      dispatch(new SendFormData(dataToSend));
      setFormSend(!formSend);
    }
  };

  return (
    <div className={styles.formContent}>
      <h1 className={styles.formTitle}>{`Join\nour\nteam`}</h1>
      <div className={styles.underline} />
      <div className={styles.formWrapper}>
        <form id={styles.jobForm} ref={refForm} encType="multipart/form-data">
          <div className={styles.inputs}>
            <div className={styles.inputName}>
              <Input
                id="job-name"
                type="text"
                name="name"
                error={formData.name.error}
                value={formData.name.value}
                handlerOnChange={handlerOnChange}
                required
              >
                Name:
              </Input>
            </div>
            <div className={styles.inputPhone}>
              <Input
                id="job-phone"
                type="text"
                name="phone"
                error={formData.phone.error}
                value={formData.phone.value}
                handlerOnChange={handlerOnChange}
                required
              >
                Phone:
              </Input>
            </div>
            <div className={styles.inputEmail}>
              <Input
                id="job-email"
                type="email"
                name="email"
                error={formData.email.error}
                value={formData.email.value}
                handlerOnChange={handlerOnChange}
                required
              >
                Email:
              </Input>
            </div>
          </div>
          <div className={styles.formComment}>
            <h6>Leave a comment</h6>
            <Textarea
              name="comment"
              value={formData.comment.value}
              error={formData.comment.error}
              placeholder="write comment"
              required={false}
              handlerOnChange={handlerOnChange}
            />
          </div>
          <div className={styles.btnsGroup}>
            <span
              className={`${styles.attachText} ${
                formData.file.error && styles.fileError
              }`}
            >
              {formData.file.value || 'doc,pdf,docx*'}
            </span>
            <label
              className={`${styles.cvAttach} ${
                formData.file.error && styles.fileError
              }`}
            >
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4401 11.05L11.25 20.2401C10.1241 21.366 8.59711 21.9985 7.0049 21.9985C5.41269 21.9985 3.88569 21.366 2.75983 20.2401C1.63397 19.1142 1.00146 17.5872 1.00146 15.995C1.00146 14.4028 1.63397 12.8758 2.75983 11.75L11.95 2.55982C12.7006 1.80924 13.7186 1.38757 14.78 1.38757C15.8415 1.38757 16.8595 1.80924 17.6101 2.55982C18.3606 3.31039 18.7823 4.32839 18.7823 5.38986C18.7823 6.45134 18.3606 7.46933 17.6101 8.21991L8.40992 17.4101C8.03464 17.7853 7.52564 17.9962 6.9949 17.9962C6.46416 17.9962 5.95516 17.7853 5.57988 17.4101C5.20459 17.0348 4.99375 16.5258 4.99375 15.995C4.99375 15.4643 5.20459 14.9553 5.57988 14.58L9.82495 10.3399"
                  stroke="white"
                  strokeWidth="2.00003"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                name="file"
                type="file"
                onChange={(e): void => handleFileInput(e)}
                required
              />
            </label>
            <button
              type="submit"
              className={styles.applyFormBtnLink}
              onClick={(e): void => handlerSendData(e)}
            >
              <span className={styles.applyFormLink}>APPLY</span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7L1 7L1 9Z"
                  fill="#171718"
                />
              </svg>
            </button>
          </div>
        </form>
        {formSend && formStatus === 'success' && (
          <ModalThanks clickHandler={handlerClosePopup} />
        )}
        {formSend && formStatus === 'failure' && (
          <ModalThanks
            clickHandler={handlerClosePopup}
            error="Please try again"
          />
        )}
      </div>
    </div>
  );
};

export default CareersForm;
