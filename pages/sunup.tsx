import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Main from '../src/core/features/SunUp/Containers/Main/Main';
import Challenge from '../src/core/features/SunUp/Containers/Challenge/Challenge';
import Solutions from '../src/core/features/SunUp/Containers/Solutions/Solutions';
import ProjectTimeline from '../src/core/features/SunUp/Containers/ProjectTimeline/ProjectTimeline';
import Images from '../src/core/features/SunUp/Containers/Images/Images';
import Technical from '../src/core/features/SunUp/Containers/Technical/Technical';
import DesignPage from '../src/core/features/SunUp/Containers/DesignPage/DesignPage';
import UserFlow from '../src/core/features/SunUp/Containers/UserFlow/UserFlow';
import Problems from '../src/core/features/SunUp/Containers/Problems/Problems';
import Analysis from '../src/core/features/SunUp/Containers/Analysis/Analysis';
import Results from '../src/core/features/SunUp/Containers/Results/Results';
import StoreLayout from '../src/core/layouts/StoreLayout';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import constants from '../src/core/shared/constants';

const SunUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>SunUp - Solar Panel Interactive Web Application</title>
        <meta
          name="keywords"
          content="Solar Panel Interactive, 3D animations, rooftaps, automatically, SunUp, web application, case study, project"
        />
        <meta
          name="description"
          content="SunUp is an interactive web application with 3D animations to automatically
          layout solar panels on rooftops."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/sunup`}
        />
        <meta property="og:title" content="SunUP" />
        <meta
          property="og:description"
          content="SunUP - Solar Panel Interactive Web Application"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/sunup.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project sunup" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/sunup`}
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
          <Challenge />
          <Solutions />
          <ProjectTimeline />
          <DesignPage />
          <Technical />
          <Images />
          {/*<Results />*/}
          {/*<UserFlow />*/}
          {/*<Problems />*/}
          {/*<Analysis />*/}
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default SunUp;
