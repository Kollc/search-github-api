import CommitsTableHead from "./commits-table-head/commits-table-head";
import CommitsTableList from "./commits-table-list/commits-table-list";

function CommitsTable(): JSX.Element {
  return (
    <table className="min-w-full leading-normal">
      <CommitsTableHead />
      <CommitsTableList />
    </table>
  );
}

export default CommitsTable;
