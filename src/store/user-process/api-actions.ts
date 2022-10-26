import { AppDispatch, State } from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";
import { setLoading, setRepositoryList, setUserInfo } from "./user-process.slice";

export const getUserInfoAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>("user/getUserInfo", async (login, { dispatch, extra: octokit }) => {
  dispatch(setLoading(true));
  try {
    const { data } = await octokit.request(`GET /users/{login}`, {
      login: login,
    });

    if (data) {
      dispatch(
        setUserInfo({
          name: data.name,
          login: data.login,
          avatar: data.avatar_url,
        })
      );
      dispatch(setLoading(false));
    }
  } catch (error) {
    dispatch(setLoading(false));
  }
});

export const getRepositoriesListByLoginAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>(
  "user/getRepositoriesListByLogin",
  async (login, { dispatch, extra: octokit }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await octokit.request("GET /users/{login}/repos", {
        login: login,
      });

      if (data) {
        dispatch(setRepositoryList(data));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
    }
  }
);
