import { NextPage } from 'next';
import Head from 'next/head';
import About from '../src/core/features/Shed/Containers/About/About';
import Challenge from '../src/core/features/Shed/Containers/Challenge/Challenge';
import Colors from '../src/core/features/Shed/Containers/Colors/Colors';
import Footer from '../src/core/features/Shed/Containers/Footer/Footer';
import Implementation from '../src/core/features/Shed/Containers/Implementation/Implementation';
import Main from '../src/core/features/Shed/Containers/Main/Main';
import Problematics from '../src/core/features/Shed/Containers/Problematics/Problematics';
import Prototype from '../src/core/features/Shed/Containers/Prototype/Prototype';
import Timeline from '../src/core/features/Shed/Containers/Timeline/Timeline';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const Shed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shed - a Service Where you Can Rent Evrething You Need</title>
        <meta
          name="keywords"
          content="Rent, Sall, sorting, data ranking, quick product serch, case study, project, service rent"
        />
        <meta
          name="description"
          content="The main task for us was to create a service with a quick product search, high-accuracy sorting and data ranking."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/shed`}
        />
        <meta property="og:title" content="Shed" />
        <meta
          property="og:description"
          content="Shed - a Service Where you Can Rent Everything You Need"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/shed.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project Shed" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/shed`}
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
          <About />
          <Prototype />
          <Timeline />
          <Problematics />
          <Challenge />
          <Implementation />
          <Colors />
          <Footer />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Shed;
