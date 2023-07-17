import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import StoreLayout from '../src/core/layouts/StoreLayout';
import ProjectsWrapper from '../src/core/features/Projects/Containers/ProjectsWrapper/ProjectsWrapper';
import FullPageScroll from '../src/core/shared/FullPageScroll/Containers/FullPageScroll';
import ContactsBlock from '../src/core/shared/ContactsBlock/ContactsBlock';
import constants from '../src/core/shared/constants';

interface ContactsProps {
  openedMenu: boolean;
}

const Contacts: NextPage<ContactsProps> = ({ openedMenu }) => {
  return (
    <>
      <Head>
        <title>We Take Pride in Our Projects | Bandapixels</title>
        <meta
          name="keywords"
          content="Our Projects, amazing clients, web app, management solutions,
          Service for Lawyers, Digitalization Platforms"
        />
        <meta
          name="description"
          content="We have partnered with some of the world’s most prominent brands. Here are just a
          few examples of the project that we’ve done with our amazing clients."
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
          content={`${constants.schema}${constants.host}/projects`}
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
        <FullPageScroll>
          <ProjectsWrapper />
          <ContactsBlock openedMenu={openedMenu} />
        </FullPageScroll>
      </StoreLayout>
    </>
  );
};

export default Contacts;
