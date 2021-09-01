import { combineReducers } from 'redux';
import CatergoryListReducer from './catergoryList';
import MealDetailReducer from './mealDetails';
import MealsListReducer from './mealsList';

const rootReducer = combineReducers({
  mealList: MealsListReducer,
  mealDetails: MealDetailReducer,
  catergoryList: CatergoryListReducer,
});
export default rootReducer;
