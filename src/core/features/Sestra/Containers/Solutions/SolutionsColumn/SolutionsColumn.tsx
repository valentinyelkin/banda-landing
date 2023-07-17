import React, { FC } from 'react';
import CardSolution, {
  CardSolutionProps,
} from '../../../CardSolution/CardSolution';
import styles from './solutions-column.module.scss';

type SolutionsColumnProps = {
  cards: CardSolutionProps[];
  order: number;
  wrapperRef?: React.RefObject<HTMLElement>;
};

const SolutionsColumn: FC<SolutionsColumnProps> = ({
  cards,
  order,
  wrapperRef,
}) => {
  return (
    <div className={styles.solutionsColumn}>
      {cards.map((item, index) => {
        return (
          <CardSolution
            key={item.title}
            title={item.title}
            desc={item.desc}
            list={item.list}
            animationDelay={(index + 2 * order) * 0.5}
            wrapperRef={wrapperRef}
          />
        );
      })}
    </div>
  );
};

export default SolutionsColumn;
