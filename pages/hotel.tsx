import { NextPage } from 'next';
import constants from '../src/core/shared/constants';
import Head from 'next/head';
import StoreLayout from '../src/core/layouts/StoreLayout';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import Main from '../src/core/features/HotelCommunityPlatform/Containers/Main/Main';
import Timeline from '../src/core/features/HotelCommunityPlatform/Containers/Timeline/Timeline';
import Challenges from '../src/core/features/HotelCommunityPlatform/Containers/Challenges/Challenges';
import TechStack from '../src/core/features/HotelCommunityPlatform/Containers/TechStack/TechStack';
import Results from '../src/core/features/HotelCommunityPlatform/Containers/Results/Results';
import OptionalFeatures from '../src/core/features/HotelCommunityPlatform/Containers/OptionalFeatures/OptionalFeatures';
import Footer from '../src/core/features/HotelCommunityPlatform/Containers/Footer/Footer';
import Goal from '../src/core/features/HotelCommunityPlatform/Containers/Goal/Goal';
import ProjectBenefits from '../src/core/features/HotelCommunityPlatform/Containers/ProjectBenefits/ProjectBenefits';
import Functionality from '../src/core/features/HotelCommunityPlatform/Containers/Functionality/Functionality';
import Features from '../src/core/features/HotelCommunityPlatform/Containers/Features/Features';

const Hotel: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Hotel community platform - lets find a perfect place to stay at and
          relax
        </title>
        <meta
          name="description"
          content="The main task for us was to create a service with a quick product search, high-accuracy sorting and data ranking."
        />
        <meta
          name="keywords"
          content="Hotel community platform, quick product search, reduce manpower, cut expenses, brand recognition globally"
        />
        <meta property="og:title" content="Hotel community platform" />
        <meta property="og:description" content="Hotel community platform" />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/hotelCommunityPlatform.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hotel community platform" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/hotel`}
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
          <Goal />
          <ProjectBenefits />
          <Timeline />
          <Challenges />
          <Functionality />
          <Features />
          <TechStack />
          <Results />
          <OptionalFeatures />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Hotel;
