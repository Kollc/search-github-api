import { AppDispatch, State } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";
import {
  setCurrentRepo,
  setCurrentRepoCommits,
  setLoading,
} from "./repository-process.slice";

export const getRepositoryInfoAction = createAsyncThunk<
  void,
  { login: string; repositoryName: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>(
  "repo/getRepositoryInfo",
  async ({ login, repositoryName }, { dispatch, extra: octokit }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await octokit.request("GET /repos/{owner}/{repositoryName}", {
        owner: login,
        repositoryName: repositoryName,
      });

      if (data) {
        dispatch(setCurrentRepo(data));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
    }
  }
);

export const getRepositoryCommitsAction = createAsyncThunk<
  void,
  { login: string; repositoryName: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>(
  "repo/getRepositoryCommits",
  async ({ login, repositoryName }, { dispatch, extra: octokit }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repositoryName}/commits",
        {
          owner: login,
          repositoryName: repositoryName,
        }
      );

      if (data) {
        dispatch(setCurrentRepoCommits(data));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
    }
  }
);
