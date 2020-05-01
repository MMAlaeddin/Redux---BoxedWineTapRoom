export const deleteBarrel = id => ({
  type: 'DELETE_BARREL',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addBarrel = (barrel) => {
  const { wineType, name, price, alcoholContent, quantity, id } = barrel;
  return {
    type: "ADD_BARREL",
    wineType: wineType,
    name: name,
    price: price,
    alcoholContent: alcoholContent,
    quantity: quantity,
    id: id
  }
}