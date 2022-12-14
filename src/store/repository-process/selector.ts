import { CommitType, RepositoryType } from "../../types/types";
import { NameSpace } from "../../consts/consts";
import { State } from "../../types/types";

export const getCurrentRepo = (state: State): RepositoryType | null =>
  state[NameSpace.Repo].currentRepo;

export const getCommitList = (state: State): CommitType[] =>
  state[NameSpace.Repo].commits;

  export const getRepoInfoLoadingStatus = (state: State): boolean =>
  state[NameSpace.Repo].loading;