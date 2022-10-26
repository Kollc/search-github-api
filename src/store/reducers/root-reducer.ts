import { userProcess } from "./../user-process/user-process.slice";
import { NameSpace } from "./../../consts/consts";
import { combineReducers } from "redux";
import { repositoryProcess } from "../repository-process/repository-process.slice";

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Repo]: repositoryProcess.reducer,
});
