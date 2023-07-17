import { NextPage } from 'next';
import Head from 'next/head';
import constants from '../src/core/shared/constants';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import Main from '../src/core/features/Bree/Containers/Main/Main';
import GoalsPursued from '../src/core/features/Bree/Containers/GoalsPursued/GoalsPursued';
import ProjectTimeline from '../src/core/features/Bree/Containers/ProjectTimeline/ProjectTimeline';
import Challenges from '../src/core/features/Bree/Containers/Challenges/Challenges';
import Features from '../src/core/features/Bree/Containers/Features/Features';
import SecondFeatures from '../src/core/features/Bree/Containers/SecondFeatures/SecondFeatures';
import TechStack from '../src/core/features/Bree/Containers/TechStack/TechStack';
import Functionality from '../src/core/features/Bree/Containers/Functionality/Functionality';
import ProjectBenefits from '../src/core/features/Bree/Containers/ProjectBenefits/ProjectBenefits';
import Results from '../src/core/features/Bree/Containers/Results/Results';
import OptionalFeatures from '../src/core/features/Bree/Containers/OptionalFeatures/OptionalFeatures';
import Footer from '../src/core/features/Bree/Containers/Footer/Footer';
import StoreLayout from '../src/core/layouts/StoreLayout';

const Bree: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bree - property management for commercial buildings</title>
        <meta
          name="keywords"
          content="Case study, project, booking, rent, property management, commercial buildings, optional features, software development, track rent, parking due, real estate"
        />
        <meta
          name="description"
          content="Easily manage all your tenants & properties, collect rent and track rent parking due, and keep everything accessible anytime, anywhere."
        />
        <meta property="og:title" content="BREE" />
        <meta
          property="og:description"
          content="Bree - Property management for commercial buildings"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/bree.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project BREE" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/bree`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bandapixels",
            "url": "${constants.schema}${constants.host}",
            "email": "team@bandapixels.com",
            "logo": "${constants.schema}${constants.host}/images/banda-logo.jpg",
            "sameAs" : [
              "https://www.behance.net/bandapixels",
              "https://www.facebook.com/BandaPixels",
              "https://dribbble.com/bandapixels",
              "https://www.linkedin.com/organization-guest/company/bandapixels"
            ]
          }`,
          }}
        />
      </Head>
      <StoreLayout>
        <ScrollLayout>
          <Main />
          <GoalsPursued />
          <ProjectTimeline />
          <Challenges />
          <Features />
          <SecondFeatures />
          <TechStack />
          <Functionality />
          <ProjectBenefits />
          <Results />
          <OptionalFeatures />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Bree;
