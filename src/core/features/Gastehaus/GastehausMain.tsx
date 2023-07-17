import { FC, useRef } from 'react';
import ContactsBlock, {
  Position,
} from '../../shared/ContactsBlock/ContactsBlock';
import AboutProject from './Containers/AboutProject/AboutProject';
import ChallengesContainer from './Containers/ChallengesContainer/ChallengesContainer';
import Features from './Containers/Features/Features';
import FunctionalityContainer from './Containers/FunctionalityContainer/FunctionalityContainer';
import Main from './Containers/Main/Main';
import MainGoal from './Containers/MainGoal/MainGoal';
import OptionalFeatures from './Containers/OptionalFeatures/OptionalFeatures';
import Results from './Containers/Results/Results';
import styles from './gastehausMain.module.scss';

const GastehausMain: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollToBlock = (sectionName: string) => {
    if (sectionRef && sectionRef.current) {
      const sectionNumber = {
        aboutProject: 1,
        challenges: 3,
        searchingMaps: 4,
        communicationsPlace: 5,
        functionality: 6,
        functionalityMaps: 8,
      };
      sectionRef.current.children[sectionNumber[sectionName]].scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={sectionRef} className={styles.containerGastehausMain}>
      <Main scrollToBlock={() => scrollToBlock('aboutProject')} />
      <AboutProject />
      <MainGoal scrollToBlock={() => scrollToBlock('challenges')} />
      <ChallengesContainer scrollToBlock={scrollToBlock} />
      <FunctionalityContainer scrollToBlock={scrollToBlock} />
      <Features />
      <Results />
      <OptionalFeatures />
      <ContactsBlock
        text="Contact us"
        position={Position.LEFT}
        classesTitle="contactsTitleGastehaus"
        classesContent="contactsGastehaus"
        classesText="contactsTextGastehaus"
        classesMail="mailBtnGastehaus"
      />
    </div>
  );
};

export default GastehausMain;
