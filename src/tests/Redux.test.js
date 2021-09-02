import { setMeals, setMealDetails } from '../actions';
import MealDetailReducer from '../reducers/mealDetails';
import MealsListReducer from '../reducers/mealsList';

it('returns the initial home state', () => {
  expect(MealsListReducer([], setMeals([]))).toEqual([]);
});

it('returns the initial home state', () => {
  expect(MealsListReducer(['Pasta'], setMeals(['Breakfast']))).toEqual([
    'Breakfast',
  ]);
});

it('returns the initial home state', () => {
  expect(MealsListReducer(['Pasta'], setMeals(['Breakfast']))).not.toEqual([
    'Pasta',
  ]);
});

it('returns the initial home state', () => {
  expect(MealsListReducer(['Pasta'], setMeals(['Corba']))).not.toEqual([]);
});

it('returns the initial Detail state', () => {
  expect(MealDetailReducer(['Pasta'], setMealDetails(['Pasta']))).toEqual([
    'Pasta',
  ]);
});

it('returns the initial Detail state', () => {
  expect(MealDetailReducer(['Pasta'], setMealDetails(['Corba']))).not.toEqual(
    [],
  );
});
