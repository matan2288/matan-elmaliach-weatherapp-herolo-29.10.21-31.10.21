import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoritesReducer from "./favoritesReducer.js";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default persistReducer(persistConfig, rootReducer);
