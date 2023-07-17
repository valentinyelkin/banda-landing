import { NextPage } from 'next';
import StoreLayout from '../../src/core/layouts/StoreLayout';
import Head from 'next/head';
import constants from '../../src/core/shared/constants';
import FullPageScroll from '../../src/core/shared/FullPageScroll/Containers/FullPageScroll';
import Main from '../../src/core/features/RealEstate/Containers/Main/Main';
import FinanceServices from '../../src/core/features/RealEstate/Containers/FinanceServices/FinanceServices';
import GuestsServices from '../../src/core/features/RealEstate/Containers/GuestsServices/GuestsServices';
import ContactsBlock from '../../src/core/shared/ContactsBlock/ContactsBlock';
import OurProjects from '../../src/core/features/RealEstate/Containers/OurProjects/OurProjects';

const RealEstate: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Real Estate</title>
        <meta property="og:title" content="Bandapixels" />
        <meta
          property="og:description"
          content="Lets make your service the best choice for the users"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/banda-logo.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bandapixels logo" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/real-estate`}
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
      <FullPageScroll>
        <Main />
        <FinanceServices />
        <GuestsServices />
        <OurProjects />
        <ContactsBlock />
      </FullPageScroll>
    </StoreLayout>
  );
};

export default RealEstate;
