import { useNavigate } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setCurrentRepo,
  setCurrentRepoCommits,
} from "../../store/repository-process/repository-process.slice";
import {
  getCurrentRepo,
  getRepoInfoLoadingStatus,
} from "../../store/repository-process/selector";
import Spinner from "../spinner/spinner";

type RepoInfoProps = {
  userLogin: string;
};

function RepositoryInfo({ userLogin }: RepoInfoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentRepo = useAppSelector(getCurrentRepo);
  const loading = useAppSelector(getRepoInfoLoadingStatus);

  const clickButtonBackHandle = () => {
    dispatch(setCurrentRepo(null));
    dispatch(setCurrentRepoCommits([]));
    navigate(`${RouteList.Profile}/${userLogin}`);
  };

  if (!currentRepo || loading) {
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
        className="border-solid border-black border-2 self-start w-1/12 rounded-2xl block bg-whitehover:border-2 
        hover:text-green-700 hover:border-green-700 py-3 px-4 text-lg font-bold uppercase"
      >
        Назад
      </button>
    </div>
  );
}

export default RepositoryInfo;
