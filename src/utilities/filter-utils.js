export {priceRangeFilter, stockFilter, fastDeliveryFilter, sortData, ratingFilter}

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



