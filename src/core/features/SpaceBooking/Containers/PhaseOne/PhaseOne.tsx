import { FC } from 'react';
import Phase from '../Phase/Phase';
import { strings } from '../../../../lists/spaceBooking';

const PhaseOne: FC = () => {
  return (
    <>
      <Phase
        title={strings.titleFirstPhase}
        classesTitle="titlePhaseOne"
        description={strings.descriptionFirstPhase}
        boldDescription={strings.descriptionFirstPhaseBold}
      />
    </>
  );
};

export default PhaseOne;
