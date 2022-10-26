import { Navigate } from "react-router-dom";
import { RouteList } from "../../../consts/routes";
import { useAppSelector } from "../../../hooks/hooks";
import { getCommitList } from "../../../store/repository-process/selector";
import CommitTableItem from "../commits-table-item/commits-table-item";

function CommitsTableList(): JSX.Element {
  const commits = useAppSelector(getCommitList);

  if (!commits) {
    return <Navigate to={RouteList.Main} />;
  }

  return (
    <tbody>
      {commits.map((commit) => (
        <CommitTableItem key={commit.sha} commit={commit} />
      ))}
    </tbody>
  );
}

export default CommitsTableList;
