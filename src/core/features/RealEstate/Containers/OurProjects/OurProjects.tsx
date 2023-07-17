import React, { FC, useRef } from 'react';
import { strings } from '../../../../lists/realEstate';
import useGrid from '../../../../utils/useGrid';
import useRedrawGrid from '../../../../utils/useRedrawGrid';
import ProjectsList from './ProjectsList/ProjectsList';
import constants from '../../../../shared/constants';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import styles from './ourProjects.module.scss';

const OurProjects: FC = () => {
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  const projects = constants.projects.filter(({ realEstate }) => realEstate);

  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);
  return (
    <section
      className={styles.container}
      ref={refGridWrapper}
      data-header="black"
    >
      <h2 className={styles.title}>{strings.titleProjects}</h2>
      <ProjectsList projects={projects} />
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default OurProjects;
