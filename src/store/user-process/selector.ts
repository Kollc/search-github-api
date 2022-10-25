import { RepoType, UserType } from "./../../types/types";
import { NameSpace } from "../../consts/consts";
import { State } from "../../types/types";

export const getUserInfo = (state: State): UserType | null =>
  state[NameSpace.User].user;

  export const getRepoList = (state: State): RepoType[] =>
  state[NameSpace.User].repoList;