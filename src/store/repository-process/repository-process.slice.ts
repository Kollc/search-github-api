import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts/consts";
import { RepoProcessType } from "../../types/types";

const initialState: RepoProcessType = {
  currentRepo: null,
  commits: [],
  loading: false,
};

export const repositoryProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setCurrentRepo: (state, action) => {
      state.currentRepo = action.payload;
    },
    setCurrentRepoCommits: (state, action) => {
      state.commits = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCurrentRepo, setCurrentRepoCommits, setLoading } = repositoryProcess.actions;
