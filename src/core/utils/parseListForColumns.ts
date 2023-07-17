export const parseListForColumns = <Type>(
  list: Type[],
  itemsInColumn: number,
) => {
  const resArray: { columnNumber: number; columnItems: Type[] }[] = [];
  const columns = Math.ceil(list.length / itemsInColumn);
  const listCopy = [...list];

  for (let i = 0; i < columns; i++) {
    resArray.push({
      columnNumber: i,
      columnItems: listCopy.splice(0, itemsInColumn),
    });
  }
  return resArray;
};
