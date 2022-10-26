import { AppDispatch, State } from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";
import {
  setCurrentRepo,
  setCurrentRepoCommits,
  setLoading,
} from "./repo-process.slice";

export const getRepositoryInfoAction = createAsyncThunk<
  void,
  { nickname: string; repoName: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>(
  "repo/getRepositoryInfo",
  async ({ nickname, repoName }, { dispatch, extra: octokit }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: nickname,
        repo: repoName,
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
  { nickname: string; repoName: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: Octokit;
  }
>(
  "repo/getRepositoryCommits",
  async ({ nickname, repoName }, { dispatch, extra: octokit }) => {
    dispatch(setLoading(true));
    try {
      const { data } = await octokit.request(
        "GET /repos/{owner}/{repo}/commits",
        {
          owner: nickname,
          repo: repoName,
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
