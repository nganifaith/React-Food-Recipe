const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
export const INGREDIENT_THUMBNAIL = 'https://www.themealdb.com/images/ingredients/';

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}

export const searchMeals = async (searchTerm) => sendRequest(`search.php?s=${searchTerm}`);
export const getMealDetails = async (mealId) => sendRequest(`lookup.php?i=${mealId}`);
