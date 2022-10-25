import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts/consts";
import { RepoProcessType } from "../../types/types";

const initialState: RepoProcessType = {
  currentRepo: null,
  commits: [],
};

export const repoProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setCurrentRepo: (state, action) => {
      state.currentRepo = action.payload;
    },
    setCurrentRepoCommits: (state, action) => {
      state.commits = action.payload;
    },
  },
});

export const { setCurrentRepo, setCurrentRepoCommits } = repoProcess.actions;
