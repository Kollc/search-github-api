import { userProcess } from "./../user-process/user-process.slice";
import { NameSpace } from "./../../consts/consts";
import { combineReducers } from "redux";
import { repoProcess } from "../repo-process/repo-process.slice";

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Repo]: repoProcess.reducer,
});
