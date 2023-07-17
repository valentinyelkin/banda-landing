import { NextPage } from 'next';
import Head from 'next/head';
import constants from '../src/core/shared/constants';
import StoreLayout from '../src/core/layouts/StoreLayout';
import ScrollLayout from '../src/core/layouts/ScrollLayout';
import Main from '../src/core/features/SpaceBooking/Containers/Main/Main';
import About from '../src/core/features/SpaceBooking/Containers/About/About';
import Benefits from '../src/core/features/SpaceBooking/Containers/Benefits/Benefits';
import Timeline from '../src/core/features/SpaceBooking/Containers/Timeline/Timeline';
import Challenges from '../src/core/features/SpaceBooking/Containers/Challenges/Challenges';
import Functionality from '../src/core/features/SpaceBooking/Containers/Functionality/Functionality';
import TechStack from '../src/core/features/SpaceBooking/Containers/TechStack/TechStack';
import Results from '../src/core/features/SpaceBooking/Containers/Results/Results';
import Testimonials from '../src/core/features/SpaceBooking/Containers/Testimonials/Testimonials';
import Features from '../src/core/features/SpaceBooking/Containers/Features/Features';
import OptionalFeatures from '../src/core/features/SpaceBooking/Containers/OptionalFeatures/OptionalFeatures';
import PhaseOne from '../src/core/features/SpaceBooking/Containers/PhaseOne/PhaseOne';
import PhaseTwo from '../src/core/features/SpaceBooking/Containers/PhaseTwo/PhaseTwo';
import ContactsBlock, {
  Position,
} from '../src/core/shared/ContactsBlock/ContactsBlock';

const SpaceBooking: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spacebooking - space utilization management system</title>
        <meta
          name="keywords"
          content="space utilization management system, case study, project, workspace management, booking, parking space booking, meeting room booking, visitor booking"
        />
        <meta
          name="description"
          content="We have developed an application for workspace management through booking workspaces with the company staff."
        />
        <meta property="og:title" content="SpaceBooking" />
        <meta
          property="og:description"
          content="SpaceBooking - space utilization management system"
        />
        <meta
          property="og:image"
          content={`${constants.schema}${constants.host}/images/projectsMain/spaceBooking.jpg`}
        />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Project SpaceBooking" />
        <meta
          property="og:url"
          content={`${constants.schema}${constants.host}/spacebooking`}
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
          <Benefits />
          <Timeline />
          <Challenges />
          <PhaseOne />
          <Functionality />
          <TechStack />
          <Results />
          <Testimonials />
          <Features />
          <OptionalFeatures />
          <PhaseTwo />
          <ContactsBlock
            text="Contact us"
            title="Let's make your service the best choice for the users"
            position={Position.LEFT}
            classes="mailBtnSpaceBooking"
            classesTitle="titleSpaceBooking"
            classesText="textSpaceBooking"
            classesMail="mailSpaceBooking"
            classesContent="contentSpaceBooking"
          />
        </ScrollLayout>
      </StoreLayout>
    </>
  );
};

export default SpaceBooking;
