export default (product = [], action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return action.payload;
    default:
      return product;
  }
};
