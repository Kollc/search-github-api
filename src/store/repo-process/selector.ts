import { CommitType, RepoType } from "./../../types/types";
import { NameSpace } from "../../consts/consts";
import { State } from "../../types/types";

export const getCurrentRepo = (state: State): RepoType | null =>
  state[NameSpace.Repo].currentRepo;

export const getCommitList = (state: State): CommitType[] =>
  state[NameSpace.Repo].commits;
