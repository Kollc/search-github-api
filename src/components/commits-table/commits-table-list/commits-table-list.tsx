import { useAppSelector } from "../../../hooks/hooks";
import { getCommitList } from "../../../store/repo-process/selector";
import CommitTableItem from "../commits-table-item/commits-table-item";

function CommitsTableList(): JSX.Element {
  const commits = useAppSelector(getCommitList);

  return (
    <tbody>
      {commits.map((commit) => (
        <CommitTableItem key={commit.sha} commit={commit} />
      ))}
    </tbody>
  );
}

export default CommitsTableList;
