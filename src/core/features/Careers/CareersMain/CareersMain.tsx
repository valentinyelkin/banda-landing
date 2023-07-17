import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link';
import styles from './careersMain.module.scss';
import useGrid from '../../../utils/useGrid';
import useRedrawGrid from '../../../utils/useRedrawGrid';
import { AppState } from '../../../store/store';

import { GetCareers } from '../careersPage.actions';
import { getAllVacancies } from '../careersPage.selectors';

const CareersMain: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const careersData = useSelector((state: AppState) => getAllVacancies(state));

  useEffect(() => {
    dispatch(new GetCareers());
  }, []);

  useGrid(refGridWrapper, 'rgba(23,23,24,0.1)', '#fff');
  useRedrawGrid(refGridWrapper);

  return (
    <section className={styles.careersWrapper} ref={refGridWrapper}>
      <div className={styles.careersContent}>
        <h1 className={styles.careersTitle}>{`Join\nour\nteam`}</h1>
        <div className={styles.horizontalLine} />
        <ul className={styles.careersList}>
          {careersData &&
            careersData.map(({ id, title }) => (
              <Link href={`/careers/${id}`} key={id}>
                <li>
                  <a>
                    <h3 className={styles.jobTitle}>{title}</h3>
                    {/* <p className={styles.jobDescription}> */}
                    {/*  {`${tech} ▪ ${time} ▪ ${rank}`} */}
                    {/* </p> */}
                    <div className={styles.arrow}>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM1 9H16V7L1 7L1 9Z"
                          fill="#EFE314"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default CareersMain;
