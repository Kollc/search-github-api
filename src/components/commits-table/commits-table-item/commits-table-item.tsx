import { CommitType } from "../../../types/types";
import { dateFormat } from "../../../utils/utils";

type CommitTableItemProps = {
  commit: CommitType;
};

function CommitTableItem({ commit }: CommitTableItemProps): JSX.Element {
  return (
    <tr className="border-solid border-b-2 border-gray-200 hover:border-green-800">
      <td className="px-5 py-5  bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {commit.commit.author.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5  bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{commit.sha}</p>
      </td>
      <td className="px-5 py-5  bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {dateFormat(commit.commit.committer.date)}
        </p>
      </td>
    </tr>
  );
}

export default CommitTableItem;
