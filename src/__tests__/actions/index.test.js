import * as actions from './../../actions';

describe('barrel actions', () => {
  it('deleteBarrel should create DELETE_BARREL action', () => {
    expect(actions.deleteBarrel(1)).toEqual({
      type: 'DELETE_BARREL',
      id: 1
    });
  });
    it('toggleFrom should create TOGGLE_FORM action', () => {
      expect(actions.toggleForm()).toEqual({
        type: 'TOGGLE_FORM'
      });
  });
  it("addBarrel should create ADD_BARREL action", () => {
    expect(actions.addBarrel({      
    wineType: "Cab",
    name: "Purple Farms",
    price: "$30",
    alcoholContent: "15%",
    quantity: 150,
    id: 1})).toEqual({
    type: "ADD_BARREL",
    wineType: "Cab",
    name: "Purple Farms",
    price: "$30",
    alcoholContent: "15%",
    quantity: 150,
    id: 1
    });
  });
  it("should create SELL_BARREL action", () => {
    expect (actions.sellBarrel(1)).toEqual({
      type: "SELL_BARREL",
      id: 1
    });
  });
});
