import { combineReducers } from 'redux';
import MealsListReducer from './mealsList';

const rootReducer = combineReducers({
  mealList: MealsListReducer,
});
export default rootReducer;
