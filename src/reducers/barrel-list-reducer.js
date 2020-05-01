export default (state = {}, action) => {
  switch (action.type) {
  case "ADD_BARREL":
    const { wineType, name, price, alcoholContent, quantity, id } = action;
    return Object.assign({}, state, {
      [id]: {
 
        wineType: wineType,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        quantity: quantity,
        id: id
      }
    });
  default:
    return state;
  }
};
