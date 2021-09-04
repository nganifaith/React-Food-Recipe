const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';
export const INGREDIENT_THUMBNAIL = 'https://www.themealdb.com/images/ingredients/';

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}

export const searchMeals = (searchTerm) => sendRequest(`search.php?s=${searchTerm}`);
export const getMealDetails = (mealId) => sendRequest(`lookup.php?i=${mealId}`);
export const getAllCatergory = () => sendRequest('list.php?c=list');
export const getMealsByCategory = async (catergoryName) => sendRequest(`filter.php?c=${catergoryName}`);
