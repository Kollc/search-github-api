import { useAppSelector } from "../../../hooks/hooks";
import { getUserInfo } from "../../../store/user-process/selector";
import { RepositoryType } from "../../../types/types";
import RepositoryTableItem from "../repository-table-item/repository-table-item";

type RepositoryTableListProps = {
  repositoryList: RepositoryType[];
};

function RepositoryTableList({
  repositoryList,
}: RepositoryTableListProps): JSX.Element {
  const user = useAppSelector(getUserInfo);

  return (
    <tbody>
      {repositoryList.map((repository) => (
        <RepositoryTableItem
          key={repository.id}
          repository={repository}
          user={user}
        />
      ))}
    </tbody>
  );
}

export default RepositoryTableList;
