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

});


