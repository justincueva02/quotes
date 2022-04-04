import { combineReducers } from "redux";

import { Quote } from "../types";

type FavoritesActions =
  | { type: "ADD_TO_FAVORITES"; payload: string }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number };

const favoritesReducer = (state: Quote[] = [], action: FavoritesActions) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
    case "REMOVE_FROM_FAVORITES":
      const arr = state.filter((quote: Quote) => {
        return quote.id !== action.payload;
      });
      console.log(arr === [...arr]);
      return [...arr];
    default:
      return state;
  }
};

type AuthActions = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };

const authReducer = (
  state = { isLoggedIn: false, userId: "" },
  action: AuthActions
) => {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: true, userId: action.payload };
    case "LOGOUT":
      return { isLoggedIn: false, userId: "" };
    default:
      return state;
  }
};

export default combineReducers({
  favorites: favoritesReducer,
  auth: authReducer,
});
