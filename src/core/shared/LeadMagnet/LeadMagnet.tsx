import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { StylesConfig } from 'react-select';
import {
  ClearFormDataStatus,
  SendFormData,
} from '../../features/MainPage/mainPage.actions';
import { getStatus } from '../../features/MainPage/mainPage.selector';
import { AppState } from '../../store/store';
import useOutsideClick from '../../utils/useOutsideClick';
import { useScroll } from '../../utils/useScroll';
import Button from '../coreUi/Button/Button';
import Input from '../coreUi/Input/Input';
import { updateCanScroll } from '../FullPageScroll/fullPageScroll.actions';
import { getLastSection } from '../FullPageScroll/fullPageScroll.selectors';
import { countryList, domainList } from '../../lists/dropdownLeadMagnet';
import styles from './leadMagnet.module.scss';

const customStyles: StylesConfig = {
  option: (provided) => ({
    ...provided,
    textAlign: 'start',
    backgroundColor: '#333333',
    color: 'white',
    textShadow: 'none',
    padding: 10,
  }),
  container: () => ({
    position: 'relative',
    width: 265,
    height: 50,
    border: '1px solid #FFFFFF',
    backgroundColor: '#333333',
  }),
  indicatorsContainer: () => ({
    width: 0,
    height: 0,
    marginTop: 20,
    marginRight: 15,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '11px solid #ffffff',
  }),
  input: (base) => ({
    ...base,
    marginTop: 10,
    color: '#ffffff',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  control: () => ({
    display: 'flex',
  }),
  placeholder: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menu: () => ({
    borderRadius: 0,
    width: 265,

    '@media only screen and (max-width: 425px)': {
      width: 249,
    },

    '@media only screen and (max-width: 375px)': {
      width: 172,
    },
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: 280,
    width: 265,
    marginTop: 20,
    zIndex: 1,

    '@media only screen and (max-width: 425px)': {
      width: 251,
    },

    '@media only screen and (max-width: 375px)': {
      width: 215,
      fontSize: 16,
    },

    '@media only screen and (max-width: 320px)': {
      width: 176,
    },
  }),
  group: () => ({
    marginBottom: 0,
  }),
  groupHeading: (base) => ({
    ...base,
    fontSize: 24,
    padding: 5,
    backgroundColor: '#333333',
    marginBottom: 0,
  }),
  multiValueLabel: () => ({
    color: '#ffffff',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      color: '#ffffff',
      marginTop: 12,
      height: 20,
      opacity,
      transition,
    };
  },
};

export const leadMagnetFormInitialState = {
  email: {
    error: false,
    value: '',
  },
  domain: {
    value: '',
  },
  country: {
    value: '',
  },
};

const LeadMagnet: React.FC = () => {
  const [showText, setShowText] = useState(false);
  const [formSend, setFormSend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [closedByClickOutside, setClosedByClickOutside] = useState(false);
  const [formData, setFormData] = useState({ ...leadMagnetFormInitialState });

  const refSection =
    useRef<HTMLDivElement | null>() as React.MutableRefObject<HTMLDivElement | null>;
  const refForm =
    useRef<HTMLFormElement | null>() as React.MutableRefObject<HTMLFormElement | null>;
  const formStatus = useSelector((state: AppState) => getStatus(state));
  const isLastSection = useSelector((state: AppState) => getLastSection(state));
  const dispatch = useDispatch();
  const isBottom = useScroll();

  const handleShowTextClick = (): void => setShowText(!showText);

  const handlerOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const input = e.target;
    const inputName: string = input.name;
    const inputVal: string = input.value;

    if (inputName in formData) {
      formValidation({
        [inputName]: {
          ...formData[inputName],
          value: inputVal,
        },
      });
    }
  };

  const handlerCloseForm = (): void => {
    if (isOpen) {
      setClosedByClickOutside(true);
    }
  };

  const formValidation = (data) => {
    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const newData = Object.entries(data).reduce(
      (
        result,
        [formName, formValue]: [string, { error: string; value: string }],
      ) => {
        const error =
          formName === 'email' && !emailReg.test(formValue.value)
            ? 'email'
            : '';

        return {
          ...result,
          [formName]: { ...data[formName], error },
        };
      },
      {},
    );
    setFormData({ ...formData, ...newData });

    const errors = Object.entries(newData).filter(
      ([, info]: [string, { error: string; value: string }]) => info.error,
    );

    return errors?.length;
  };

  const handleFieldSelect = (value: string, name: string): void => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const prepareDataToSend = (): Record<string, string> => {
    return Object.keys(formData).reduce(
      (res, key) => ({
        ...res,
        [key]: formData[key].value,
      }),
      {},
    );
  };

  const handlerSendData = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const errors = formValidation(formData);

    if (!errors) {
      e.preventDefault();
      const dataToSend = prepareDataToSend();

      dispatch(new SendFormData(dataToSend));
      setFormSend(!formSend);
    }

    if (formStatus === 'success') {
      setFormData({ ...leadMagnetFormInitialState });
      refForm?.current?.reset();
      dispatch(new ClearFormDataStatus());
    }
  };

  useEffect(() => {
    if (formStatus === 'success') {
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } else {
      setIsOpen(isLastSection || isBottom);
    }
  }, [formStatus, isLastSection, isBottom]);

  useOutsideClick(refSection, handlerCloseForm);

  return (
    <section
      className={
        isOpen && !closedByClickOutside
          ? styles.containerLeadMagnet
          : styles.containerOpenFormLeadMagnet
      }
      ref={refSection}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.wrapperTitle}>
        <h2 className={styles.titleLeadMagnet}>
          Business <br />
          research for free
        </h2>
        <Button
          classes={showText ? 'btnInfoActiveLeadMagnet' : 'btnInfoLeadMagnet'}
          handlerClick={handleShowTextClick}
        >
          i
        </Button>
      </div>
      {showText && (
        <div className={styles.showWrapperField}>
          <span className={styles.textField}>
            We&apos;ll do and send you a useful and profitable IT solution list
            for your business to grow
          </span>
        </div>
      )}
      <form ref={refForm}>
        <div className={styles.wrapperField}>
          <p className={styles.titleField}>email</p>
          <Input
            id="lead-magnet-email"
            type="email"
            autoComplete="email"
            name="email"
            error={formData.email.error}
            value={formData.email.value}
            classes="leadMagnetInput"
            handlerOnChange={handlerOnChange}
          />
        </div>
        <div className={styles.wrapperField}>
          <p className={styles.titleField}>Business domain</p>
          <Select
            instanceId="domainType"
            options={domainList}
            styles={customStyles}
            onChange={(value) => handleFieldSelect(value as string, 'domain')}
            onMenuOpen={() => dispatch(updateCanScroll(false))}
            onMenuClose={() => dispatch(updateCanScroll(true))}
          />
        </div>
        <div className={styles.wrapperField}>
          <p className={styles.titleField}>Country</p>
          <Select
            instanceId="countryType"
            options={countryList}
            styles={customStyles}
            onChange={(value) => handleFieldSelect(value as string, 'country')}
            onMenuOpen={() => dispatch(updateCanScroll(false))}
            onMenuClose={() => dispatch(updateCanScroll(true))}
          />
        </div>
        {formSend && formStatus === 'success' && (
          <div className={styles.wrapperThankField}>
            <span className={styles.textThankField}>
              Thanks! Check your email to approve.
            </span>
          </div>
        )}
      </form>
      {formSend && formStatus === 'success' ? (
        <div className={styles.buttonWrapper}>
          <Button classes="btnNextActiveLeadMagnet" disabled={true}>
            Next
          </Button>
          <Button
            classes="btnCloseActiveLeadMagnet"
            handlerClick={handlerCloseForm}
          >
            Close
          </Button>
        </div>
      ) : (
        <div className={styles.buttonWrapper}>
          <Button
            classes="btnNextActiveLeadMagnet"
            handlerClick={(e): void => handlerSendData(e)}
          >
            Next
          </Button>
          <Button classes="btnCloseLeadMagnet" handlerClick={handlerCloseForm}>
            Close
          </Button>
        </div>
      )}
    </section>
  );
};

export default LeadMagnet;
