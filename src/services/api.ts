import { Octokit } from "octokit";

export const octokit = new Octokit({
  auth: "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",
});

export const getByUserName = async (login: string) => {
  try {
    const result = await octokit.request(`GET /users/${login}`);
    // console.log(result);
  } catch (error) {}
};

export const getReposList = async (login: string) => {
  try {
    const result = await octokit.request("GET /users/{login}/repos", {
      login: login,
    });
    // console.log(result);
  } catch (error) {}
};

export const getOneRepos = async (login: string, reposName: string) => {
  try {
    const result = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: login,
      repo: reposName,
    });
    // console.log(result);
  } catch (error) {}
};
