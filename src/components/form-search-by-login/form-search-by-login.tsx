import { ChangeEvent, FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { RouteList } from "../../consts/routes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUserInfoAction } from "../../store/user-process/api-actions";
import {
  getUserInfo,
  getUserInfoLoadingStatus,
} from "../../store/user-process/selector";
import Spinner from "../spinner/spinner";

function FormSearchByLogin(): JSX.Element {
  const [login, setLogin] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserInfo);
  const loading = useAppSelector(getUserInfoLoadingStatus);
  const [isFetch, setIsFetch] = useState(false);

  const submitSearchByLoginHandle = (evt: FormEvent) => {
    evt.preventDefault();

    if (login) {
      dispatch(getUserInfoAction(login));
      setIsFetch(true);
    }
  };

  const changeLoginUserHadle = (evt: ChangeEvent<HTMLInputElement>) => {
    setLogin(evt.target.value);
    setIsFetch(false);
  };

  if (loading && !user) {
    <Spinner />;
  }

  if (user && !loading) {
    return <Navigate to={`${RouteList.Profile}/${user.login}`} />;
  }

  return (
    <form
      className="w-7/12 flex flex-col"
      onSubmit={submitSearchByLoginHandle}
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
          value={login}
          className={`block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            !user && isFetch && !loading && "ring-red-500 ring-2"
          }`}
          placeholder="Введите логин с github..."
          required
          onChange={changeLoginUserHadle}
        />
        {!user && isFetch && !loading && (
          <p className="absolute text-sm text-red-500 -bottom-6">
            Пользователь с таким логином не был найден!
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-3/12 mx-auto rounded-2xl block border-2 border-white bg-white hover:bg-transparent hover:border-2 hover:text-white hover:border-white py-3 px-4 text-lg  
        hover:text-white font-bold uppercase mt-10"
      >
        Найти
      </button>
    </form>
  );
}

export default FormSearchByLogin;
