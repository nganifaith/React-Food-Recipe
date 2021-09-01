import { SET_CATERGORIES } from '../actions';

export default function CatergoryListReducer(state = [], action) {
  switch (action.type) {
    case SET_CATERGORIES:
      return action.payload;
    default:
      return state;
  }
}

export const getcatergories = (state) => state.catergoryList;
