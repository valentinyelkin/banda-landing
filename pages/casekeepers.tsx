import { NextPage } from 'next';
import Head from 'next/head';
import Challenge from '../src/core/features/CaseKeepers/Containers/Challenge/Challenge';
import Footer from '../src/core/features/CaseKeepers/Containers/Footer/Footer';
import KeyFeature from '../src/core/features/CaseKeepers/Containers/KeyFeature/KeyFeature';
import Main from '../src/core/features/CaseKeepers/Containers/Main/Main';
import Structure from '../src/core/features/CaseKeepers/Containers/Structure/Structure';
import Technical from '../src/core/features/CaseKeepers/Containers/Technical/Technical';
import Timeline from '../src/core/features/CaseKeepers/Containers/Timeline/Timeline';
import UserFlow from '../src/core/features/CaseKeepers/Containers/UserFlow/UserFlow';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const CaseKeepers: NextPage = () => {
  return (
    <>
      <Head>
        <title>CaseKeepers - Service for Lawyers & Their Clients</title>
        <meta
          name="keywords"
          content="Service for Lawyers, Convenient, Innovative collaboration suite, Smart convenient, project, case study, collaboration suite, casekeepers, convenient site"
        />
        <meta
          name="description"
          content="Convenient and innovative collaboration suite for lawyers, therapists and their clients. It is smart, convenient and new Collaboration Suite"
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/casekeepers`}
        />
        <meta property="og:title" content="CaseKeepers" />
        <meta
          property="og:description"
          content="CaseKeepers - Service for Lawyers & Their Clients"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/casekeepers.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project CaseKeepers" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/casekeepers`}
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
          <UserFlow />
          <Challenge />
          <Structure />
          <KeyFeature />
          <Timeline />
          <Technical />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default CaseKeepers;
