export const SET_MEAL = 'SET_MEAL';
export const SET_MEAL_DETAILS = 'SET_MEAL_DETAILS';

export const setMeals = (meals) => ({
  type: SET_MEAL,
  payload: meals,
});

export const setMealDetails = (meal) => ({
  type: SET_MEAL_DETAILS,
  payload: meal,
});
