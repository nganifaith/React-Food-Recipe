import {
  searchMeals,
  getMealDetails,
  getAllCatergory,
  getMealsByCategory,
} from '../API';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

it('returns all meals if nothing is passed', () => {
  searchMeals('');
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}search.php?s=`);
});

it('returns all meals if nothing is passed', () => {
  searchMeals('Burek');
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}search.php?s=Burek`);
});

it('returns all meals if nothing is passed', () => {
  getMealDetails('1');
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}lookup.php?i=1`);
});

it('returns all meals if nothing is passed', () => {
  getAllCatergory();
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}list.php?c=list`);
});

it('returns all meals if nothing is passed', () => {
  getMealsByCategory('Breakfast');
  expect(fetch).toHaveBeenCalledWith(`${baseUrl}filter.php?c=Breakfast`);
});
