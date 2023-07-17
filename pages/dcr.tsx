import { NextPage } from 'next';
import Head from 'next/head';
import Analysis from '../src/core/features/Dcr/Containers/Analysis/Analysis';
import DesignSolutions from '../src/core/features/Dcr/Containers/DesignSolutions/DesignSolutions';
import Footer from '../src/core/features/Dcr/Containers/Footer/Footer';
import Main from '../src/core/features/Dcr/Containers/Main/Main';
import Problem from '../src/core/features/Dcr/Containers/Problem/Problem';
import Prototypes from '../src/core/features/Dcr/Containers/Prototypes/Prototypes';
import UserFlow from '../src/core/features/Dcr/Containers/UserFlow/UserFlow';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const Dcr: NextPage = () => {
  return (
    <>
      <Head>
        <title>DCR - Business Digitalization Platform</title>
        <meta
          name="keywords"
          content="Digitalization Platform, modern, design concrpts, Brand identity, prototypes, case study, project, solutions, business digitalization platform"
        />
        <meta
          name="description"
          content="The goal was to make the platform modern and intuitive without significant changes
          for the sake of existing customers' convenience."
        />
        <meta property="og:title" content="DCR" />
        <meta
          property="og:description"
          content="DCR - Business Digitalization Platform "
        />
        <meta name="url" content={`${constants.schema}${constants.host}/dcr`} />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/dcr.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project DCR" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/dcr`}
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
          <Analysis />
          <UserFlow />
          <Prototypes />
          <Problem />
          <DesignSolutions />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Dcr;
