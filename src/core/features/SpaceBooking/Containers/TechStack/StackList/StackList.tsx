import { FC } from 'react';
import { techStack } from '../../../../../lists/spaceBooking';
import StackItem from './StackItem/StackItem';

const StackList: FC = () => (
  <>
    {techStack.map(({ src, title, delay, id, classesImg }) => (
      <StackItem
        key={id}
        src={src}
        title={title}
        delay={delay}
        classesImg={classesImg}
      />
    ))}
  </>
);

export default StackList;
