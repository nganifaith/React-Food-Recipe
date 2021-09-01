import { combineReducers } from 'redux';
import MealDetailReducer from './mealDetails';
import MealsListReducer from './mealsList';

const rootReducer = combineReducers({
  mealList: MealsListReducer,
  mealDetails: MealDetailReducer,
});
export default rootReducer;
