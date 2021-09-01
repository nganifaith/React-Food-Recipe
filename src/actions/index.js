export const SET_MEAL = 'SET_MEAL';
export const SET_MEAL_DETAILS = 'SET_MEAL_DETAILS';
export const SET_CATERGORIES = 'SET_CATERGORIES';

export const setMeals = (meals) => ({
  type: SET_MEAL,
  payload: meals || [],
});

export const setMealDetails = (meal) => ({
  type: SET_MEAL_DETAILS,
  payload: meal,
});

export const setCAetrgories = (catergories) => ({
  type: SET_CATERGORIES,
  payload: catergories,
});
