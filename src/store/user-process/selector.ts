import { RepositoryType, UserType } from "./../../types/types";
import { NameSpace } from "../../consts/consts";
import { State } from "../../types/types";

export const getUserInfo = (state: State): UserType | null =>
  state[NameSpace.User].user;

export const getRepositoryList = (state: State): RepositoryType[] =>
  state[NameSpace.User].repositoryList;

export const getUserInfoLoadingStatus = (state: State): boolean =>
  state[NameSpace.User].loading;
