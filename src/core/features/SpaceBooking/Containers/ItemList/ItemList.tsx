import { FC } from 'react';
import Item, { ItemProps } from './Item/Item';

interface ItemListProps {
  list: ItemProps[];
  classesStr?: string;
  classesContainer?: string;
}

const ItemList: FC<ItemListProps> = ({ list, classesStr }) => {
  return (
    <ul>
      {list.map(
        ({
          secondStr,
          secondBold,
          firstStr,
          firstBold,
          id,
          withLine,
          withLineTop,
          withLineFeaturesLeft,
          withLineFeaturesRight,
          classesContainer,
        }) => (
          <Item
            key={id}
            firstStr={firstStr}
            firstBold={firstBold}
            secondStr={secondStr}
            secondBold={secondBold}
            classesStr={classesStr}
            classesContainer={classesContainer}
            withLine={withLine}
            withLineTop={withLineTop}
            withLineFeaturesLeft={withLineFeaturesLeft}
            withLineFeaturesRight={withLineFeaturesRight}
          />
        ),
      )}
    </ul>
  );
};

export default ItemList;
