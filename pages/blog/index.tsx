import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import StoreLayout from '../../src/core/layouts/StoreLayout';
import FullPageScroll from '../../src/core/shared/FullPageScroll/Containers/FullPageScroll';
import WelcomeToBlog from '../../src/core/features/BlogPage/Containers/WelcomeToBlog/WelcomeToBlog';
import MainWrapper from '../../src/core/features/BlogPage/Containers/MainWrapper/MainWrapper';
import Posts from '../../src/core/features/BlogPage/Containers/Posts/Posts';
import ContactsBlock from '../../src/core/shared/ContactsBlock/ContactsBlock';
import constants from '../../src/core/shared/constants';

const Home: NextPage = () => {
  return (
    <StoreLayout>
      <Head>
        <title>Blogs | Bandapixels</title>
        <meta
          name="keywords"
          content="Blog, technology trends, experience, SAAS"
        />
        <meta
          name="description"
          content="Going along with the technology trends. Sharing experience."
        />
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
          content={`${constants.schema}${constants.host}/blog`}
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
      <MainWrapper>
        <FullPageScroll>
          <WelcomeToBlog />
          <Posts />
          <ContactsBlock />
        </FullPageScroll>
      </MainWrapper>
    </StoreLayout>
  );
};

export default Home;
