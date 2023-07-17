import { NextPage } from 'next';
import Head from 'next/head';
import Challenge from '../src/core/features/Arxonas/Challenge/Challenge';
import Functionality from '../src/core/features/Arxonas/Functionality/Functionality';
import Main from '../src/core/features/Arxonas/Main/Main';
import Mobile from '../src/core/features/Arxonas/Mobile/Mobile';
import Technical from '../src/core/features/Arxonas/Technical/Technical';
import Testimonials from '../src/core/features/Arxonas/Testimonials/Testimonials';
import Web from '../src/core/features/Arxonas/Web/Web';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import StoreLayout from '../src/core/layouts/StoreLayout';
import constants from '../src/core/shared/constants';

const Arxonas: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arxonas - Holistic Tax Management Solution</title>
        <meta
          name="keywords"
          content="Holistic tax management solution, Specially tailored, Arxonas, Project, Case study, Mobile interface, App developers software, Cohesive solution"
        />
        <meta
          name="description"
          content="Arxonas was born out of the desire to finally create a holistic management solution,
          specially tailored to the needs of tax firms."
        />
        <meta
          name="url"
          content={`${constants.schema}${constants.host}/arxonas`}
        />
        <meta property="og:title" content="Arxonas" />
        <meta
          property="og:description"
          content="Arxonas - Holistic Tax Management Solution"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/arxonas.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project Arxonas" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/arxonas`}
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
          <Testimonials />
          <Challenge />
          <Functionality />
          <Web />
          <Mobile />
          <Technical />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default Arxonas;
