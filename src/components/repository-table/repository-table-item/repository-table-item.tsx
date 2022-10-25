import { Link } from "react-router-dom";
import { RouteList } from "../../../consts/routes";
import { RepoType } from "../../../types/types";

type RepositoryTableItemProps = {
  repo: RepoType;
};

function RepositoryTableItem({ repo }: RepositoryTableItemProps): JSX.Element {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <Link
              to={`${RouteList.Repository}/${repo.name}`}
              className="text-gray-900 whitespace-no-wrap"
            >
              {repo.name}
            </Link>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{repo.language}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{repo.description}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">{repo.stargazers_count}</span>
        </span>
      </td>
    </tr>
  );
}

export default RepositoryTableItem;
