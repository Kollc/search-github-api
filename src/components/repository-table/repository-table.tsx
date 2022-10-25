import RepositoryTableHead from "./repository-table-head/repository-table-head";
import RepositoryTableList from "./repository-table-list/repository-table-list";

function RepositoryTable(): JSX.Element {
  return (
    <table className="min-w-full leading-normal">
      <RepositoryTableHead />
      <RepositoryTableList />
    </table>
  );
}

export default RepositoryTable;
