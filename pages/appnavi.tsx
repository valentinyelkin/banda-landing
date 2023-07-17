import { NextPage } from 'next';
import Head from 'next/head';
import AboutTheProject from '../src/core/features/AppNavi/Containers/AboutTheProject/AboutTheProject';
import AboutVideo from '../src/core/features/AppNavi/Containers/AboutVideo/AboutVideo';
import AnalysisAndSolution from '../src/core/features/AppNavi/Containers/AnalysisAndSolution/AnalysisAndSolution';
import Challenge from '../src/core/features/AppNavi/Containers/Challenge/Challenge';
import MainBlock from '../src/core/features/AppNavi/Containers/MainBlock/MainBlock';
import Problematics from '../src/core/features/AppNavi/Containers/Problematics/Problematics';
import Results from '../src/core/features/AppNavi/Containers/Results/Results';
import Solution from '../src/core/features/AppNavi/Containers/Solution/Solution';
import SolutionVideo from '../src/core/features/AppNavi/Containers/SolutionVideo/SolutionVideo';
import Technologies from '../src/core/features/AppNavi/Containers/Technologies/Technologies';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const AppNavi: NextPage = () => {
  return (
    <>
      <Head>
        <title>AppNavi - Web App and Browser Extension</title>
        <meta
          name="keywords"
          content="Web app, Browser extension, Software easily explained, Appnavi, App development software, Case study, Project, Training new employees, Software app builder, Browser extension"
        />
        <meta
          name="description"
          content="AppNavi was created as a new approach to employee training and increasing work efficiency;
          thus it gained popularity among the clients."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/appnavi`}
        />
        <meta property="og:title" content="AppNavi" />
        <meta
          property="og:description"
          content="AppNavi - Web App and Browser Extension"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/appnavi.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project AppNavi" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/appnavi`}
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
          <MainBlock />
          <AboutTheProject />
          <AboutVideo />
          <Problematics />
          <Challenge />
          <Solution />
          <SolutionVideo />
          <AnalysisAndSolution />
          <Results />
          <Technologies />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default AppNavi;
