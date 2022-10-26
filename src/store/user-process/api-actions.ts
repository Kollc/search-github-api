import { AppDispatch, RepoType, State } from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";
import { setLoading, setRepoList, setUserInfo } from "./user-process.slice";

export const getUserInfoAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>("user/getUserInfo", async (nickname, { dispatch, extra: octokit }) => {
  dispatch(setLoading(true));
  try {
    const { data } = await octokit.request(`GET /users/{nickname}`, {
      nickname: nickname,
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

export const getRepositoriesListByNicknameAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>(
  "user/getRepositoriesListByNickname",
  async (login, { dispatch, extra: octokit }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await octokit.request("GET /users/{login}/repos", {
        login: login,
      });

      if (data) {
        dispatch(setRepoList(data));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
    }
  }
);
