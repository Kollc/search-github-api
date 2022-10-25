import { CommitType } from "../../../types/types";

type CommitTableItemProps = {
  commit: CommitType;
};

function CommitTableItem({ commit }: CommitTableItemProps): JSX.Element {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {commit.author.login}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{commit.sha}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {commit.commit.committer.date}
        </p>
      </td>
    </tr>
  );
}

export default CommitTableItem;
