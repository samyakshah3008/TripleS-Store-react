export {
  priceRangeFilter,
  stockFilter,
  fastDeliveryFilter,
  sortData,
  ratingFilter,
  sortByCategory,
};

const priceRangeFilter = (priceList, filterPriceList) => {
  return priceList.filter((item) => item.price <= filterPriceList);
};

const stockFilter = (stockList, filterStockList) => {
  return stockList.filter((item) =>
    filterStockList ? item.inStock === true : item
  );
};

const fastDeliveryFilter = (fastDeliveryProdList, filterProdList) => {
  return [...fastDeliveryProdList].filter((item) =>
    filterProdList ? item.fastDelivery === true : item
  );
};

const sortData = (prodList, sortByList) => {
  if (sortByList === "LOW_TO_HIGH") {
    return [...prodList].sort((a, b) => a.price - b.price);
  }
  if (sortByList === "HIGH_TO_LOW") {
    return [...prodList].sort((a, b) => b.price - a.price);
  }
  return prodList;
};

const ratingFilter = (ratingList, ratingByList) => {
  if (ratingByList === "4STARSABOVE") {
    return [...ratingList].filter((item) => item.ratings >= 4);
  }
  if (ratingByList === "3STARSABOVE") {
    return [...ratingList].filter((item) => item.ratings >= 3);
  }
  if (ratingByList === "2STARSABOVE") {
    return [...ratingList].filter((item) => item.ratings >= 2);
  }
  if (ratingByList === "1STARSABOVE") {
    return [...ratingList].filter((item) => item.ratings >= 1);
  }
  return ratingList;
};

const sortByCategory = (
  sortCategoryList,
  mrf,
  kookabura,
  spartan,
  nike,
  exclusive,
  newbalance
) => {
  const newArray = [];
  if (
    mrf === false &&
    kookabura === false &&
    spartan === false &&
    nike === false &&
    exclusive === false &&
    newbalance === false
  ) {
    return sortCategoryList;
  }
  if (mrf === true) {
    let newList = sortCategoryList.filter(
      (item) => item.categoryName === "mrf"
    );
    newArray.push(...newList);
  }
  if (kookabura === true) {
    let newList = sortCategoryList.filter(
      (item) => item.categoryName === "kookabura"
    );
    newArray.push(...newList);
  }
  if (spartan === true) {
    let newList = sortCategoryList.filter(
      (item) => item.categoryName === "spartan"
    );
    newArray.push(...newList);
  }
  if (nike === true) {
    let newList = sortCategoryList.filter(
      (item) => item.categoryName === "nike"
    );
    newArray.push(...newList);
  }
  if (newbalance === true) {
    let newList = sortCategoryList.filter(
      (item) => item.categoryName === "newbalance"
    );
    newArray.push(...newList);
  }
  if (exclusive === true) {
    let newList = sortCategoryList.filter(
      (item) => item.categoryName === "exclusive"
    );
    newArray.push(...newList);
  }

  return newArray;
};
