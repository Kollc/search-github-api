import { RepoType, UserType } from "./../../types/types";
import { NameSpace } from "../../consts/consts";
import { State } from "../../types/types";

export const getRepoInfo = (state: State): UserType | null =>
  state[NameSpace.User].user;

  export const getCommitList = (state: State): RepoType[] =>
  state[NameSpace.User].repoList;