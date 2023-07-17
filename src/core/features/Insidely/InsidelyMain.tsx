import React, { FC } from 'react';
import About from './About/About';
import Main from './Main/Main';
import Timeline from './Timeline/Timeline';
import globalStyles from './assets/scss/insidely_global.module.scss';
import Project from './Project/Project';
import Challenges from './Challenges/Challenges';
import Functionality from './Functionality/Functionality';
import Features from './Features/Features';
import Stacks from './Stack/Stacks';
import Results from './Results/Results';
import OptionalFeatures from './OptionalFeatures/OptionalFeatures';
import Contacts from './Contacts/Contacts';
import Goals from './Goals/Goals';

const InsidelyMain: FC = (): JSX.Element => {
  return (
    <div className={globalStyles.wrapper}>
      <Main />
      <About />
      <Timeline />
      <Project />
      <Goals />
      <Challenges />
      <Functionality />
      <Features />
      <Stacks />
      <Results />
      <OptionalFeatures />
      <Contacts />
    </div>
  );
};

export default InsidelyMain;
