import { useAppSelector } from "../../hooks/hooks";
import {
  getRepositoryList,
  getUserInfoLoadingStatus,
} from "../../store/user-process/selector";
import RepositoryTableHead from "./repository-table-head/repository-table-head";
import RepositoryTableList from "./repository-table-list/repository-table-list";

function RepositoryTable(): JSX.Element {
  const repositoryList = useAppSelector(getRepositoryList);
  const loading = useAppSelector(getUserInfoLoadingStatus);

  if (getRepositoryList.length <= 0 && !loading) {
    return (
      <div>
        <h2 className="text-center text-4xl text-white">
          У данного пользователя не былой найдено ни одного репозитория!
        </h2>
      </div>
    );
  }

  return (
    <table className="min-w-full leading-normal">
      <RepositoryTableHead />
      <RepositoryTableList repositoryList={repositoryList} />
    </table>
  );
}

export default RepositoryTable;
