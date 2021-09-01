import { SET_MEAL_DETAILS } from '../actions';
import { INGREDIENT_THUMBNAIL } from '../API';

export default function MealDetailReducer(state = {}, action) {
  switch (action.type) {
    case SET_MEAL_DETAILS:
      return action.payload;
    default:
      return state;
  }
}

export const getDetails = (state) => state.mealDetails;
export const getIngredients = (state) => {
  const details = getDetails(state);
  const ingredients = [];
  if (details) {
    let i = 1;
    while (i < 21) {
      const ingredient = details[`strIngredient${i}`];
      const measure = details[`strMeasure${i}`];
      if (ingredient) {
        const image = `${INGREDIENT_THUMBNAIL}${ingredient.replace(
          ' ',
          '-',
        )}.png`;
        ingredients.push({
          i,
          ingredient,
          measure,
          image,
        });
        i += 1;
      } else {
        break;
      }
    }
  }
  return ingredients;
};
