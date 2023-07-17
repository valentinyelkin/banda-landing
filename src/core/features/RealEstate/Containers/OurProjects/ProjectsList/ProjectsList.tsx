import React, { FC, useRef, useState } from 'react';
import Project from './Project/Project';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButtonGroup from '../../../../Bree/CardsList/CustomButtonGroup/CustomButtonGroup';
import CustomRightArrow from '../../../../Bree/CardsList/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../../../../Bree/CardsList/CustomLeftArrow/CustomLeftArrow';
import { useIsInViewport } from '../../../../../utils/useIsInViewport';
import styles from './projectsList.module.scss';

interface IProject {
  title: string;
  description: string;
  url: string;
  image: string;
}

interface ProjectsListProps {
  projects: IProject[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 2,
    paritialVisibilityGutter: 130,
  },
  laptopXl: {
    breakpoint: { max: 1800, min: 1680 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  laptopL: {
    breakpoint: { max: 1680, min: 1440 },
    items: 2,
    paritialVisibilityGutter: 10,
  },
  laptop: {
    breakpoint: { max: 1440, min: 1324 },
    items: 2,
    paritialVisibilityGutter: 140,
  },
  laptopSmall: {
    breakpoint: { max: 1324, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 70,
  },
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1,
    paritialVisibilityGutter: 250,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
  },
};

const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
  const ref = useRef(null);
  const isInViewPort = useIsInViewport(ref);

  const [scroll, setScroll] = useState(true);

  const changeTitle = (title: string) => title.split(' ')[0];
  const removeTag = (description: string) =>
    description.replace(/<\/?p[^>]*>/g, '');
  return (
    <div ref={ref}>
      <Carousel
        containerClass={styles.customContainer}
        customButtonGroup={<CustomButtonGroup setScroll={setScroll} />}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
        partialVisbile
        ssr
        swipeable
        autoPlaySpeed={5000}
        autoPlay={scroll && isInViewPort}
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={changeTitle(project.title)}
            description={removeTag(project.description)}
            image={project.image}
            url={project.url}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectsList;
