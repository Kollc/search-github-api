import { useNavigate } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import { useAppDispatch } from "../../hooks/hooks";
import {
  setRepoList,
  setUserInfo,
} from "../../store/user-process/user-process.slice";
import { UserType } from "../../types/types";

type UserInfoProps = {
  user: UserType;
};

function UserInfo({ user }: UserInfoProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const clickButtonBackHandle = () => {
    dispatch(setUserInfo(null));
    dispatch(setRepoList([]));
    navigate(RouteList.Main);
  };

  return (
    <div className="flex justify-between">
      <div className="flex mb-10">
        <a href="#" className="block relative">
          <img
            alt={user.name}
            src={user.avatar}
            className="mx-auto object-cover rounded-full h-20 w-20 "
          />
        </a>
        <div className="ml-10 self-center">
          <h1 className=" text-3xl font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h1>
          <h1 className="mt-3 text-2xl text-gray-800 dark:text-white">
            {user.login}
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

export default UserInfo;
