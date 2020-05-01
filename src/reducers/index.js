import formVisibleReducer from './form-visible-reducer';
import barrelListReducer from './barrel-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBarrelList: barrelListReducer
});

export default rootReducer;