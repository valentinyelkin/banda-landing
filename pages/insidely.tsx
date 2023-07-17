import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import constants from '../src/core/shared/constants';
import StoreLayout from '../src/core/layouts/StoreLayout';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import InsidelyMain from '../src/core/features/Insidely/InsidelyMain';

const Insidely: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Insidely</title>
        <meta
          name="keywords"
          content="Staff communication and interaction, Task management, Alerts and notifications, Checklists, Databases, Analytics and reporting"
        />
        <meta
          name="description"
          content="Insidely is a feature-rich solution for managing internal operations of a hotel and streamlining staff collaboration."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/insidely`}
        />
        <meta property="og:title" content="Insidely" />
        <meta
          property="og:description"
          content="insidely - Real Estate Web Service"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/insidely.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project insidely" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/insidely`}
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
          <InsidelyMain />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Insidely;
