import React from 'react';
import { projectTimeline } from '../../../../../lists/cardBree';
import TimelineItem from './TimelineItem/TimelineItem';

const TimelineList: React.FC = () => (
  <>
    {projectTimeline.map(({ name, classes, classesName, num, id, month }) => (
      <TimelineItem
        key={id}
        name={name}
        num={num}
        month={month}
        classesName={classesName}
        classes={classes}
      />
    ))}
  </>
);

export default TimelineList;
