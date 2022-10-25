import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect } from "react";
import { getUserInfo } from "../../../store/user-process/selector";
import {
  getRepositoryCommitsAction,
  getRepositoryInfoAction,
} from "../../../store/repo-process/api-actions";
import { useParams } from "react-router-dom";
import CommitsTable from "../../commits-table/commits-table";
import RepoInfo from "../../repo-info/repo-info";
import Spinner from "../../spinner/spinner";

function RepositoryPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { repoName, login } = useParams();

  useEffect(() => {
    if (login && repoName) {
      dispatch(getRepositoryInfoAction({ repoName, nickname: login }));
      dispatch(getRepositoryCommitsAction({ repoName, nickname: login }));
    }
  }, [login, repoName]);

  if (!login || !repoName) {
    return <Spinner />;
  }

  return (
    <main className="px-4 bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="mt-4 flex items-start justify-between">
        <div className="flex flex-col w-full md:space-y-4">
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            <RepoInfo userLogin={login} />
            <div className="w-full">
              <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <CommitsTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RepositoryPage;
