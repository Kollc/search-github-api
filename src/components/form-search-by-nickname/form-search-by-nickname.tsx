import { FormEvent, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUserInfoAction } from "../../store/user-process/api-actions";
import { getUserInfo } from "../../store/user-process/selector";
import Spinner from "../spinner/spinner";

function FormSearchByNickname(): JSX.Element {
  const [nickname, setNickname] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserInfo);

  const submitSearchByNicknameHandle = (evt: FormEvent) => {
    evt.preventDefault();

    if (nickname) {
      dispatch(getUserInfoAction(nickname));
    }
  };

  if (user) {
    return <Navigate to={`${RouteList.Profile}/${user.login}`} />;
  }

  return (
    <form
      className="w-7/12 flex flex-col"
      onSubmit={submitSearchByNicknameHandle}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={nickname}
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter a github nickname..."
          required
          onChange={(evt) => setNickname(evt.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-3/12 mx-auto rounded-2xl block bg-white hover:bg-gray-900 py-3 px-4 text-lg  hover:text-white font-bold uppercase mt-10"
      >
        Search Now
      </button>
    </form>
  );
}

export default FormSearchByNickname;
