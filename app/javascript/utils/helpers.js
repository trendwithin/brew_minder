export const chunkArray = (arr, size) => {
  let chunkedArray = [];
  console.log(arr.length);
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};
