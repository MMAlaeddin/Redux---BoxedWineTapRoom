import barrelListReducer from "../../reducers/barrel-list-reducer";

describe ("barrelListReducer", () => {
  test ("Should return default state if there is no action type passed into the reducer", () => {
    expect (barrelListReducer({}, { type: null })).toEqual({});
  })
})