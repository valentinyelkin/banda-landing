import { FC } from 'react';
import Phase from '../Phase/Phase';
import { strings } from '../../../../lists/spaceBooking';

const PhaseTwo: FC = () => {
  return (
    <>
      <Phase
        title={strings.titleSecondPhase}
        classesTitle="titlePhaseTwo"
        classesContainer="containerSecondPhase"
      />
    </>
  );
};

export default PhaseTwo;
