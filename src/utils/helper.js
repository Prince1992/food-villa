export const filterData = (searchText, allRestaurant) => {
  const filterData = allRestaurant.filter((res) =>
    res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};
