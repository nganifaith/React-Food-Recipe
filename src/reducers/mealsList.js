import { SET_MEAL } from '../actions';

export default function MealsListReducer(state = [], action) {
  switch (action.type) {
    case SET_MEAL:
      return action.payload;
    default:
      return state;
  }
}

export const getMeals = (state) => state.mealList;
