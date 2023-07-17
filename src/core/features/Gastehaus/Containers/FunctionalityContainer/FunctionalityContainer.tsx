import { FC } from 'react';
import Functionality from './Functionality/Functionality';
import FunctionalitySecondBlock from './FunctionalitySecondBlock/FunctionalitySecondBlock';
import FunctionalityThirdBlock from './FunctionalityThirdBlock/FunctionalityThirdBlock';

interface FunctionalityContainerProps {
  scrollToBlock: (sectionName: string) => void;
}

const FunctionalityContainer: FC<FunctionalityContainerProps> = ({
  scrollToBlock,
}) => {
  return (
    <>
      <Functionality />
      <FunctionalitySecondBlock
        scrollToBlock={() => scrollToBlock('functionalityMaps')}
      />
      <FunctionalityThirdBlock />
    </>
  );
};

export default FunctionalityContainer;
