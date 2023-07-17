import { NextPage } from 'next';
import Head from 'next/head';
import SestraMain from '../src/core/features/Sestra/SestraMain';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const Sestra: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sestra - cloud-based beverage dispensing platform</title>
        <meta
          name="keywords"
          content="Platform, Innovative cloud-based beverage, End-to-end management, Keep everything under control, Detects and reports various issues, Actionable insights, Connected control, Precision pouring, Actionable insights, Self-service option"
        />
        <meta
          name="description"
          content="We have developed an innovative cloud-based beverage dispensing platform suitable for different kinds of venues."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/sestra`}
        />
        <meta
          property="og:title"
          content="Sestra - cloud-based beverage dispensing platform"
        />
        <meta
          property="og:description"
          content="We have developed an innovative cloud-based beverage dispensing platform suitable for different kinds of venues."
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/sestra.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project Sestra" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/sestra`}
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
          <SestraMain />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Sestra;
