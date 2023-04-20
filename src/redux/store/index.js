import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";

const rootReducer = combineReducers({
    homePage: homePageReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
