export const paginateArray = (array, pageSize) => {
  const pageCount = Math.ceil(array?.length / pageSize);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(array.slice(i * pageSize, (i + 1) * pageSize));
  }
  return pages;
};
