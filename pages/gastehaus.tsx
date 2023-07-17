import { NextPage } from 'next';
import Head from 'next/head';
import GastehausMain from '../src/core/features/Gastehaus/GastehausMain';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const Gastehaus: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gastehaus</title>
        <meta
          name="keywords"
          content="Real estate, case stady, project, web service, airbnb, german speakers, software development, functionalities, web app"
        />
        <meta
          name="description"
          content="We have developed a B2B\B2C platform that enables end-users to easily rent multiple items at the same time, like a room or a flat, transportation, tools, etc."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/gastehaus`}
        />
        <meta property="og:title" content="Gastehaus" />
        <meta
          property="og:description"
          content="Gastehaus - Real Estate Web Service"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/gastehaus.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project Gastehaus" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/gastehaus`}
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
          <GastehausMain />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Gastehaus;
