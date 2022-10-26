import { useAppSelector } from "../../../hooks/hooks";
import { getRepoList, getUserInfo } from "../../../store/user-process/selector";
import RepositoryTableItem from "../repository-table-item/repository-table-item";

function RepositoryTableList(): JSX.Element {
  const repoList = useAppSelector(getRepoList);
  const user = useAppSelector(getUserInfo);

  return (
    <tbody>
      {repoList.map((repo) => (
        <RepositoryTableItem key={repo.id} repo={repo} user={user} />
      ))}
    </tbody>
  );
}

export default RepositoryTableList;
