import { combineReducers, createStore } from "redux";
import mainMenuReducer from "./mainMenuReducer";
import settingsReducer from "./settingsReducer";

let reducers = combineReducers({
  settingsState: settingsReducer,
  mainMenuState: mainMenuReducer
});

let store = createStore(reducers);

export default store;