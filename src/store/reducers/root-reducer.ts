import { userProcess } from "./../user-process/user-process.slice";
import { NameSpace } from "./../../consts/consts";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
});
