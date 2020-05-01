import barrelListReducer from "../reducers/barrel-list-reducer";

describe ("barrelListReducer", () => {

  let action; 
  const barrelData = {
    type: "Cab",
    name: "Purple Farms",
    price: "$30",
    alcoholContent: "15%",
    quantity: 150,
    id: 1
  }; 

  test ("Should successfully add new barrel data to masterBarrelList", () => {
    const { type, name, price, alcoholContent, quantity, id } = barrelData;
    action = {
      type: "ADD_BARRELL",
      type: type,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id
    };
    expect (barrelListReducer({}, action )).toEqual({
      [id] : {
        type: type,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        quantity: quantity,
        id: id
      }
    })
  });

  test ("Should return default state if there is no action type passed into the reducer", () => {
    expect (barrelListReducer({}, { type: null })).toEqual({});
  })
})