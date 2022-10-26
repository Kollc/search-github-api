import { useNavigate } from "react-router-dom";
import { RouteList } from "../../../consts/routes";
import { RepositoryType, UserType } from "../../../types/types";
import CountStarsView from "../../count-stars-view/count-stars-view";

type RepositoryTableItemProps = {
  repository: RepositoryType;
  user: UserType | null;
};

function RepositoryTableItem({
  repository,
  user,
}: RepositoryTableItemProps): JSX.Element {
  const navigate = useNavigate();

  const clickTableLineHandle = () => {
    navigate(`${RouteList.Repository}/${user?.login}/${repository.name}`);
  };

  return (
    <tr
      className="cursor-pointer border-b border-gray-200 hover:border-green-800"
      onClick={clickTableLineHandle}
    >
      <td className="px-5 py-5 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <span className="text-gray-900 whitespace-no-wrap">
              {repository.name}
            </span>
          </div>
        </div>
      </td>
      <td className="px-5 py-5  bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{repository.language}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{repository.description}</p>
      </td>
      <td className="px-5 py-5 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <CountStarsView countStars={repository.stargazers_count} />
        </span>
      </td>
    </tr>
  );
}

export default RepositoryTableItem;
