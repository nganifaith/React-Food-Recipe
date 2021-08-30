const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
export const MEAL_THUMBNAIL_IMG = 'https://www.themealdb.com/images/media/meals/';
export const INGREDIENT_THUMBNAIL = 'https://www.themealdb.com/images/ingredients/';

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}

export const searchMeals = async (searchTerm) => sendRequest(`search.php?s=${searchTerm}`);
