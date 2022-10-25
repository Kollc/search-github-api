import { useAppSelector } from "../../../hooks/hooks";
import { getRepoList } from "../../../store/user-process/selector";
import RepositoryTableItem from "../repository-table-item/repository-table-item";

function RepositoryTableList(): JSX.Element {
  const repoList = useAppSelector(getRepoList);

  return (
    <tbody>
      {repoList.map((repo) => (
       <RepositoryTableItem key={repo.id} repo={repo}/>
      ))}
    </tbody>
  );
}

export default RepositoryTableList;
