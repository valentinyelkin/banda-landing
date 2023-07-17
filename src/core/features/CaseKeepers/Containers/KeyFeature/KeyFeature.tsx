import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './keyFeature.module.scss';
import checkMobilePicture from '../../../../utils/checkMobilePicture';

const KeyFeature: React.FunctionComponent = () => {
  const isMobile = useIsMobile();
  const adaptivePicture = checkMobilePicture(isMobile);

  return (
    <section className={styles.keepersKeyFeature}>
      <div className={styles.keepersKeyFeatureWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>Key Features</h2>
        </AnimationOnScroll>
        <div className={styles.keepersKeyFeatureImg}>
          <div className={styles.keepersKeyFeatureImgWrapper}>
            <div className={styles.keepersKeyFeatureTextBlock}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p className={styles.titleSection}>Quick and easy journaling</p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p>
                  Users (both professionals and clients) can quickly and easily
                  capture events in their journals using text or tags; add
                  photos, videos, or audio; each entry is automatically stamped
                  with date, time and location. <br />
                  Save any item: SMS messages, emails, phone messages, photos,
                  videos, documents, Facebook pages, and more.
                </p>
              </AnimationOnScroll>
            </div>
            <img
              src={`/images/projects/caseKeepers/journal-feature-for-professionals-and-clients${adaptivePicture}.png`}
              alt="Journal feature for professionals and clients"
            />
          </div>
          <div className={styles.keepersKeyFeatureImgWrapper}>
            <div className={styles.keepersKeyFeatureTextBlock}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p className={styles.titleSection}>Secure messaging</p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p>
                  Clients can safely share their evidence journal with the
                  attorney to protect their rights in court, or message with
                  their therapist or coach to support the progress in therapy.
                </p>
                <br />
                <p>
                  Users control who has access to their journal and what they
                  can see.
                </p>
              </AnimationOnScroll>
            </div>
            <img
              src={`/images/projects/caseKeepers/messaging-feature${adaptivePicture}.png`}
              alt="Messaging feature"
            />
          </div>
          <div className={styles.keepersKeyFeatureImgWrapper}>
            <div className={styles.keepersKeyFeatureTextBlock}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p className={styles.titleSection}>
                  Easy-to-use interface on all devices
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p>
                  Users can create journal entries on their cell phone or
                  tablet; later edit them on their desktop.
                </p>
                <br />
                <p>
                  Intuitive interface enables users to seamlessly move between
                  devices and operating systems.
                </p>
              </AnimationOnScroll>
            </div>
            {!isMobile && (
              <div className={styles.mediaWrapper}>
                <Image
                  src="/images/projects/caseKeepers/application-interface-works-on-all-devices.webp"
                  alt="Application interface works on all devices"
                  width={1845}
                  height={1715}
                />
              </div>
            )}
            {isMobile && (
              <img
                src="/images/projects/caseKeepers/application-interface-works-on-all-devices-mobile.png"
                alt="Application interface works on all devices"
              />
            )}
          </div>
          <div className={styles.keepersKeyFeatureImgWrapper}>
            <div className={styles.keepersKeyFeatureTextBlock}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p className={styles.titleSection}>
                  Advanced search and reporting
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <span className={styles.lowerTitle}>ATTORNEYS: </span>
                <p>
                  The easy-to-use advanced search feature enables them to
                  retrieve relevant evidence from their client’s journal
                  repository and quickly create reports.
                </p>
                <br />
                <span className={styles.lowerTitle}>THERAPISTS:</span>
                <p>
                  They can view graphical displays of clients’ progress over
                  time to boost their confidence.
                </p>
              </AnimationOnScroll>
            </div>
            <img
              src={`/images/projects/caseKeepers/easy-reporting-for-therapists-and-attorneys${adaptivePicture}.png`}
              alt="Easy reporting for therapists and attorneys"
            />
          </div>
          <div className={styles.keepersKeyFeatureImgWrapper}>
            <div className={styles.keepersKeyFeatureTextBlock}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p className={styles.titleSection}>Easy data exchange</p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <span className={styles.lowerTitle}>ATTORNEYS: </span>
                <p>
                  Clients can collect, store and manage their valuable, relevant
                  evidence, messages and emails; share it at any time.
                  Specialists can access the repository at their convenience.
                </p>
                <br />
                <span className={styles.lowerTitle}>THERAPISTS:</span>
                <p>
                  Clients track their thoughts, feelings, and behaviors over
                  time; therapists can follow-up on their homework and journal
                  entries through the repository.
                </p>
              </AnimationOnScroll>
            </div>
            <img
              src={`/images/projects/caseKeepers/data-exchange-application-for-attorneys-and-therapists${adaptivePicture}.png`}
              alt="Data exchange application for attorneys and therapists"
            />
          </div>
          <div className={styles.keepersKeyFeatureImgWrapper}>
            <div className={styles.keepersKeyFeatureTextBlock}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <p className={styles.titleSection}>
                  Compliance to the highest standarts
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
              >
                <span className={styles.lowerTitle}>ATTORNEYS: </span>
                <p>
                  CaseKeepers maintains the chain of custody for all client
                  evidence to assure admissibility in court.
                </p>
                <br />
                <span className={styles.lowerTitle}>THERAPISTS:</span>
                <p>
                  CaseKeepers is fully HIPAA compliant to protect client
                  confidentiality.
                </p>
              </AnimationOnScroll>
            </div>
            <img
              src={`/images/projects/caseKeepers/easy-client-story-tracking-for-attorneys-and-therapists${adaptivePicture}.png`}
              alt="Easy client story tracking for attorneys and therapists"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeature;
