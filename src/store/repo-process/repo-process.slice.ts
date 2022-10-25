import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts/consts";
import { RepoProcessType } from "../../types/types";

const initialState: RepoProcessType = {};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setCurrentRepo: (state, action) => {
      // state.user = action.payload;
    },
    setCurrentRepoCommits: (state, action) => {
      // state.user = action.payload;
    },
  },
});

export const { setCurrentRepo, setCurrentRepoCommits } = userProcess.actions;
