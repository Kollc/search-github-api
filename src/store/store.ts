import { octokit } from './../services/api';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './reducers/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: octokit,
      },
    }),
});