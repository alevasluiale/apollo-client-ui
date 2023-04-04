import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authenticationReducer } from "../components/authentication/reducers/authentication";

const store = configureStore({
  reducer: combineReducers({
    authentication: authenticationReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
