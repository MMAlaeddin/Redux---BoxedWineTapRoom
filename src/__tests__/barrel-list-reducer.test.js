import barrelListReducer from "../reducers/barrel-list-reducer";

describe ("barrelListReducer", () => {

  // let action; 
  // const barrelData = {
  //   type: "Cab",
  //   name: "Purple Farms",
  //   price: "$30",
  //   alcoholContent: "15%",
  //   quantity: 150
  // }; 
  test ("Should return default state if there is no action type passed into the reducer", () => {
    expect (barrelListReducer({}, { type: null })).toEqual({});
  })
})