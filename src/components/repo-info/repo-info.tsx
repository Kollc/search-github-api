import { useNavigate } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setCurrentRepo,
  setCurrentRepoCommits,
} from "../../store/repo-process/repo-process.slice";
import { getCurrentRepo } from "../../store/repo-process/selector";
import Spinner from "../spinner/spinner";

type RepoInfoProps = {
  userLogin: string;
};

function RepoInfo({ userLogin }: RepoInfoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentRepo = useAppSelector(getCurrentRepo);

  const clickButtonBackHandle = () => {
    dispatch(setCurrentRepo(null));
    dispatch(setCurrentRepoCommits([]));
    navigate(`${RouteList.Profile}/${userLogin}`);
  };

  if (!currentRepo) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-between bg-white shadow rounded-lg p-4">
      <div className="flex mb-10">
        <div className="ml-10 self-center">
          <h1 className=" text-3xl font-semibold text-gray-800 dark:text-white">
            {currentRepo.name}
          </h1>
          <h1 className="mt-3 text-2xl text-gray-800 dark:text-white">
            {currentRepo.description}
          </h1>
        </div>
      </div>
      <button
        onClick={clickButtonBackHandle}
        className="border-solid border-black border-2 self-start w-1/12 rounded-2xl block bg-white hover:bg-gray-900 py-3 px-4 text-lg  hover:text-white font-bold uppercase"
      >
        Назад
      </button>
    </div>
  );
}

export default RepoInfo;
