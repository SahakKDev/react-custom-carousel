export const sliderLeftBtnClick = (
  currentItemsIndexes: number[],
  allItems: string[],
  count: number,
  loop?: boolean,
) => {
  const updatedCurrentItemsIndexes = [...currentItemsIndexes];
  let firstIndex = updatedCurrentItemsIndexes[0];
  let disableLeftClick = false;

  for (let i = 0; i < count; i++) {
    firstIndex--;

    if (!allItems[firstIndex]) {
      if (!loop) {
        disableLeftClick = true;
        break;
      }
      firstIndex = allItems.length - 1;
    }

    updatedCurrentItemsIndexes.unshift(firstIndex);
    updatedCurrentItemsIndexes.pop();
  }

  return {
    currentItemsIndexes: updatedCurrentItemsIndexes,
    disableLeftClick,
  };
};

export const sliderRightBtnClick = (
  currentItemsIndexes: number[],
  allItems: string[],
  count: number,
  loop?: boolean,
) => {
  const updatedCurrentItemsIndexes = [...currentItemsIndexes];
  let lastIndex = updatedCurrentItemsIndexes.at(-1) as number;
  let disableRightClick = false;

  for (let i = 0; i < count; i++) {
    lastIndex++;

    if (!allItems[lastIndex]) {
      if (!loop) {
        disableRightClick = true;
        break;
      }
      lastIndex = 0;
    }
    updatedCurrentItemsIndexes.push(lastIndex);
    updatedCurrentItemsIndexes.shift();
  }

  return {
    currentItemsIndexes: updatedCurrentItemsIndexes,
    disableRightClick,
  };
};
