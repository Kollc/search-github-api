import { UserProcessType } from "./../../types/types";
import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts/consts";

const initialState: UserProcessType = {
  user: null,
  repoList: [],
  loading: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    setRepoList: (state, action) => {
      state.repoList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUserInfo, setRepoList, setLoading } = userProcess.actions;
