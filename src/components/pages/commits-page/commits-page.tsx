import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect } from "react";
import {
  getRepositoryCommitsAction,
  getRepositoryInfoAction,
} from "../../../store/repository-process/api-actions";
import { useParams } from "react-router-dom";
import CommitsTable from "../../commits-table/commits-table";
import RepositoryInfo from "../../repository-info/repository-info";
import Spinner from "../../spinner/spinner";
import { getRepoInfoLoadingStatus } from "../../../store/repository-process/selector";

function CommitsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { repositoryName, login } = useParams();
  const loading = useAppSelector(getRepoInfoLoadingStatus);

  useEffect(() => {
    if (login && repositoryName) {
      dispatch(getRepositoryInfoAction({ repositoryName, login }));
      dispatch(getRepositoryCommitsAction({ repositoryName, login }));
    }
  }, [login, repositoryName]);

  if (loading || !login) {
    return <Spinner />;
  }

  return (
    <main className="px-4 bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative bg-gradient-to-b to-green-800 from-yellow-500">
      <div className="mt-4 flex items-start justify-between">
        <div className="flex flex-col w-full md:space-y-4">
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
            <RepositoryInfo userLogin={login} />
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

export default CommitsPage;
