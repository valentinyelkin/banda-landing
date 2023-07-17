import { FC } from 'react';
import Item, { ItemProps } from './Item/Item';
import classnames from 'classnames';
import styles from './itemList.module.scss';

interface ItemListProps {
  list: ItemProps[];
  containerClasses?: string;
  listClasses?: string;
}

const ItemList: FC<ItemListProps> = ({
  list,
  containerClasses,
  listClasses,
}) => {
  const listStyles = classnames(listClasses && [styles[listClasses]]);

  return (
    <ul className={listStyles}>
      {list.map(
        ({
          description,
          description1,
          boldDescription1,
          boldDescription2,
          id,
        }) => (
          <Item
            key={id}
            description={description}
            description1={description1}
            boldDescription1={boldDescription1}
            boldDescription2={boldDescription2}
            containerClasses={containerClasses}
          />
        ),
      )}
    </ul>
  );
};

export default ItemList;
