import { AppDispatch, State } from "./../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Octokit } from "octokit";
import { setCurrentRepo, setCurrentRepoCommits } from "./repo-process.slice";

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
    try {
      const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: nickname,
        repo: repoName,
      });

      if (data) {
        dispatch(setCurrentRepo(data));
      }
    } catch (error) {}
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
    try {
      const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: nickname,
        repo: repoName,
      });

      console.log(data);

      if (data) {
        dispatch(setCurrentRepoCommits(data));
      }
    } catch (error) {}
  }
);