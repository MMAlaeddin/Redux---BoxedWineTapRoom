import barrelListReducer from "../reducers/barrel-list-reducer";

describe ("barrelListReducer", () => {

  let action; 
  const barrelData = {
    wineType: "Cab",
    name: "Purple Farms",
    price: "$30",
    alcoholContent: "15%",
    quantity: 150,
    id: "1"
  }; 

  test ("Should return default state if there is no action wineType passed into the reducer", () => {
    expect (barrelListReducer({}, { type: null })).toEqual({});
  });

  test ("Should successfully add new barrel data to masterBarrelList", () => {
    const { wineType, name, price, alcoholContent, quantity, id } = barrelData;
    action = {
      type: "ADD_BARREL",
      wineType: wineType,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id
    };
    expect (barrelListReducer({}, action )).toEqual({
      [id] : {
        wineType: wineType,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        quantity: quantity,
        id: id
      }
    });
  });

});