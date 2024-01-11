import { PortfolioItem, ItemsByGroup } from "../types/types";


// export type ItemsByGroup = [string, PortfolioItem[]][];

export function prepareData(
  array: PortfolioItem[],
  groupSize: number,
  nameGroup: string[]
) {
  const resultArray: ItemsByGroup = [];

  let j = 0;

  for (let i = 0; i < nameGroup.length; i += 1) {

    // const arrayItem = [];
    const arrayItem: [string, PortfolioItem[]] = [];

    arrayItem.push(nameGroup[i])
    arrayItem.push(array.slice(j, j += groupSize));
    resultArray.push(arrayItem);
  }

  return resultArray;
}
