import { FC } from 'react';
import Challenges from './Challenges/Challenges';
import SearchingMaps from './SearchingMaps/SearchingMaps';
import CommunicationsPlace from './CommunicationsPlace/CommunicationsPlace';

interface ChallengesContainerProps {
  scrollToBlock: (sectionName: string) => void;
}

const ChallengesContainer: FC<ChallengesContainerProps> = ({
  scrollToBlock,
}) => {
  return (
    <>
      <Challenges scrollToBlock={() => scrollToBlock('searchingMaps')} />
      <SearchingMaps
        scrollToBlock={() => scrollToBlock('communicationsPlace')}
      />
      <CommunicationsPlace
        scrollToBlock={() => scrollToBlock('functionality')}
      />
    </>
  );
};

export default ChallengesContainer;
