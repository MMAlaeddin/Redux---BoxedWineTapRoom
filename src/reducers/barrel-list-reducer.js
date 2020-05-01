export default (state = {}, action) => {
  const { wineType, name, price, alcoholContent, quantity, id } = action;
  switch (action.type) {
  case "ADD_BARREL":
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

  case "DELETE_BARREL":
    const newState = { ...state };
    delete newState[id]; 
    return newState;
  default:
    return state;
  }
};
