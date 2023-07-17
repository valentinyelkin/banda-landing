import React, { FC } from 'react';
import About from './Containers/About/About';
import Benefits from './Containers/Benefits/Benefits';
import Solutions from './Containers/Solutions/Solutions';
import Main from './Containers/Main/Main';
import Timeline from './Containers/Timeline/Timeline';
import Functionality from './Containers/Functionality/Functionality';
import Features from './Containers/Features/Features';
import Testimonials from './Containers/Testimonials/Testimonials';
import Results from './Containers/Results/Results';
import Footer from './Containers/Footer/Footer';

const SestraMain: FC = () => {
  return (
    <>
      <Main />
      <About />
      <Benefits />
      <Timeline />
      <Solutions />
      <Functionality />
      <Features />
      <Testimonials />
      <Results />
      <Footer />
    </>
  );
};

export default SestraMain;
