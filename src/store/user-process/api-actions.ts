import { AppDispatch, RepoType, State } from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";
import { setRepoList, setUserInfo } from "./user-process.slice";

export const getUserInfoAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>("user/getUserInfo", async (nickname, { dispatch, extra: octokit }) => {
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
    }
  } catch (error) {}
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
    try {
      const { data } = await octokit.request("GET /users/{login}/repos", {
        login: login,
      });

      if (data) {
        dispatch(setRepoList(data));
      }
    } catch (error) {}
  }
);

