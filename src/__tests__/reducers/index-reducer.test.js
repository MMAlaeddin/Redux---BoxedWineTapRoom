import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import barrelListReducer from '../../reducers/barrel-list-reducer';

let store = createStore(rootReducer);

describe ("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
  expect(rootReducer({}, { type: null })).toEqual({
    masterBarrelList: {},
    formVisibleOnPage: false
  });
});
  test('Check that initial state of barrelListReducer matches root reducer', () => {
    expect(store.getState().masterBarrelList).toEqual(barrelListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });


});

export default rootReducer;

