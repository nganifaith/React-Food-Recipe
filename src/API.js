const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

export const searchMeals = async (searchTerm) => {
  return sendRequest(`search.php?s=${searchTerm}`);
};

async function sendRequest(url) {
  const endPoint = `${baseUrl}${url}`;
  const response = await fetch(endPoint);
  return response.json();
}
